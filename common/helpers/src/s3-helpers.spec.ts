import { urlToBucketAndKey } from "./s3-helpers";

describe("urlToBucketAndKey", () => {

    it("Should return a bucket name and key from a url", () => {
        // Arrange
        const bucketName = "blog-posts-27672a8b-4beb-4c32-8d69-98ba8eacf4e5";
        const key = "article.json";
        const url = `https://${bucketName}.s3.amazonaws.com/${key}`;

        // Act
        const response = urlToBucketAndKey(url)

        // Assert
        expect(response.bucketName).toEqual(bucketName);
        expect(response.key).toEqual(key);
    });

});