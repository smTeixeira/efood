import { TagContainer } from './styles'

export type Props = {
  children: string | boolean
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
