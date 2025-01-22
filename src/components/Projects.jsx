function Projects() {
  const project_data = [
    {
      title: "ABC",
      type: "frontend",
      color: "red-300",
      description: "project data place the value of science and technology",
    },
  ];
  return (
    <>
      <h2 className="font-semibold">Project Title</h2>
      {project_data.map((data, key) => (
        <div key={key}>
          <h1 className="text-bold">{data.title}</h1>
          <span>{data.type}</span>
          <p>{data.description}</p>
        </div>
      ))}
    </>
  );
}

export default Projects;
