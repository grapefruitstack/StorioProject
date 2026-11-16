
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../server.js";

describe("GET /api/pages", () => {
    it("should retrieve all pages successfully", async () => {
        const response = await request(app).get("/api/pages");

        // Check that the request succeeded.
        expect(response.status).toBe(200);

        // Check that the response indicates success.
        expect(response.body.success).toBe(true);

        // Check that the returned data is an array.
        expect(Array.isArray(response.body.data)).toBe(true);

        // Check that the Home page exists.
        expect(response.body.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 1,
                    title: "Home"
                })
            ])
        );
    });
});
