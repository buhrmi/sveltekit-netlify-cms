const modules = Object.entries(import.meta.globEager("./routes/**/*.md"));

const getRoutes = () => {
	return modules.map(([file, module]) => {
		const path = file
			.replace("./routes/", "/")
			.replace("index", "")
			.replace(".md", "");

		return {
			path,
			...module.metadata,
		};
	});
};

export { getRoutes };
