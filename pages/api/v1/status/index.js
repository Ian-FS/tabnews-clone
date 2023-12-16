function status(request, response) {
  response
    .status(200)
    .json({ texto: "alunos do curso.dev são acima da média" });
}

export default status;
