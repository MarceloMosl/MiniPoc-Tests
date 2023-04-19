import app from "../src/app";

import supertest from "supertest";

const server = supertest(app);

describe("fruits suit", () => {
  it("Should create new fruit", async () => {
    const fruta = {
      name: "Maçã",
      price: "14",
    };
    const result = await server.post("/fruits").send(fruta);

    expect(result.status).toBe(201);
  });

  it("Should return all fruits", async () => {
    const result = await server.get("/fruits");
    console.log(result.body);

    expect(result.status).toBe(200);
  });

  it("Should not create a Fruit with no price", async () => {
    const fruta = {
      name: "Maçã",
    };
    const result = await server.post("/fruits").send(fruta);

    expect(result.status).toBe(422);
  });

  it("Should return a specific fruit", async () => {
    const result = await server.get("/fruits/1");
    console.log(result.body);

    expect(result.status).toBe(200);
  });
});
