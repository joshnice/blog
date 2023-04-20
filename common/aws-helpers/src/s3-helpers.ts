
/** 
 * Example - https://blog-posts-27672a8b-4beb-4c32-8d69-98ba8eacf4e5.s3.amazonaws.com/article.json
 * 
 * Returns -
 * bucketName: blog-posts-27672a8b-4beb-4c32-8d69-98ba8eacf4e5 
 * key: article.json
 */
export function urlToBucketAndKey(url: string): { bucketName: string, key: string } {
    const spiltUrl = url.split("/");
    const [bucketName] = spiltUrl[2].split(".");
    return { bucketName, key: spiltUrl[spiltUrl.length - 1] }
} 
