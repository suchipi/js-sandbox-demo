import { makeShortlivedVm } from "./shortlived-vm";

async function main() {
	const vm = await makeShortlivedVm();

	const db = [];

	vm.setProp(
		vm.global,
		"addToDb",
		vm.marshal((item) => {
			db.push(item);
			return { haha: "yeah" };
		})
	);

	const handle = vm.unwrapResult(
		vm.evalCode(`addToDb({ hello: "world", "": ":D" });`)
	);
	console.log("Success:", vm.dump(handle));

	console.log(db);
}

main().catch((err) => {
	console.error(err.stack);
});
