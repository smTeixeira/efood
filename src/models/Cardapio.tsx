class Cardapio {
  title: string
  tag: string[]
  image: string
  description: string
  nota: number
  id: number

  constructor(
    id: number,
    title: string,
    tag: string[],
    image: string,
    description: string,
    nota: number
  ) {
    this.id = id
    this.title = title
    this.tag = tag
    this.image = image
    this.description = description
    this.nota = nota
  }
}

export default Cardapio
