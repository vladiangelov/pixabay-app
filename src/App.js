// import { Authenticator } from "@aws-amplify/ui-react"
// import "@aws-amplify/ui-react/styles.css"
// import { Amplify } from "aws-amplify"
// import awsExports from "./aws-exports"
// import Dashboard from "./components/Dashboard"

// Amplify.configure(awsExports)

// export default function App() {
//   return (
//     <Authenticator socialProviders={["facebook"]}>
//       {({ signOut, user }) => {
//         console.log(`user`, user)
//         return (
//           <main>
//             <h1>Hello {user.attributes.email}</h1>
//             <button onClick={signOut}>Sign out</button>
//             <Dashboard />
//           </main>
//         )
//       }}
//     </Authenticator>
//   )
// }

import { withAuthenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import React from "react"
import styled from "styled-components"
import awsExports from "./aws-exports"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import { mq } from "./utils/mediaQueries"

Amplify.configure(awsExports)

// TODO: Adjust all pixel based properties to follow the font sizes

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes.small};
  ${mq(`mediumUp`)} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  ${mq(`largeUp`)} {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`

function App({ signOut, user }) {
  return (
    <Layout>
      <Header signOut={signOut} user={user} />
      <Dashboard />
    </Layout>
  )
}

export default withAuthenticator(App)
