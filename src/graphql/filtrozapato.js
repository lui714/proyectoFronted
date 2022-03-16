import gql from 'graphql-tag'
export const ShowMarca = gql`
query MarcaId($idm: ID!) {
  marcaId(idm: $idm) {
    id
    marca
    modelo
    tallas
    publishedDate
    thumbnailUrl
    precio
    longDescription
    status
  }
}
`