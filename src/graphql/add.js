import gql from 'graphql-tag'
export const addzapato = gql`
query ZapatoId($zapatoIdId: ID!) {
  zapatoId(id: $zapatoIdId) {
    data {
      ... on Zapato {
        id
        marca
        modelo
        publishedDate
        thumbnailUrl
        precio
        longDescription
        status
        tallas
      }
    }
  }
}`