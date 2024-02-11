import { codegen } from "@codegen/codegen";

(async () => {
  const response = await codegen(process.argv.slice(2).join(" "));

  console.log(response);
})();

export { codegen };
