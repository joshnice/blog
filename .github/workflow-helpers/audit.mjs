import { exec } from "child_process";
import { readFile, readdir, access } from "node:fs/promises";

function getVulnerabilitiesForWorkspace(workspaceName) {
  return new Promise((res) =>
    exec(`npm audit --json --workspace="./${workspaceName}"`, (_, output) => {
      const parsedOutput = JSON.parse(output);
      res(Object.keys(parsedOutput.vulnerabilities));
    })
  );
}

function getAuditForRepo() {
  return new Promise((res) =>
    exec(`npm audit --json"`, (_, output) => {
      res(JSON.parse(output));
    })
  );
}


async function checkIsValidWorkspace(path) {
  try {
    await access(`${path}/package.json`)
    return true
  } catch {
    return false
  }
}

async function getWildCardWorkspace(workspacePath) {
  const validWorkspaces = []
  const wildcardWorkspacePath = workspacePath.replace("/*", "");
  const wildcardWorkspaces = await readdir(`./${wildcardWorkspacePath}`);

  for (const wildcardWorkspace of wildcardWorkspaces) {
    const isValid = await checkIsValidWorkspace(`./${wildcardWorkspacePath}/${wildcardWorkspace}`);
    if (isValid) {
      validWorkspaces.push(`${wildcardWorkspacePath}/${wildcardWorkspace}`);
    }
  }

  return validWorkspaces;
}

async function main() {
  const packageJson = JSON.parse(
    await readFile("./package.json", { encoding: "utf8" })
  );

  const workspacePaths = [];

  for (const workspace of packageJson.workspaces) {
    if (workspace.includes("*")) {
      const wildcardWorkspaces = await getWildCardWorkspace(workspace);
      workspacePaths.push(...wildcardWorkspaces);
    } else {
      workspacePaths.push(workspace);
    }
  }

  const workspaceAudit = {};

  for (const workspace of workspacePaths) {
    const workspacePackageJson = JSON.parse(await readFile(`${workspace}/package.json`, { encoding: "utf8" }));
    workspaceAudit[workspacePackageJson.name] = await getVulnerabilitiesForWorkspace(workspace);
  }
  
  // const audit = await getAuditForRepo();
  // console.log("Repo audit", audit.metadata.vulnerabilities);
  console.log("Workspace audit", workspaceAudit);
}

main();

