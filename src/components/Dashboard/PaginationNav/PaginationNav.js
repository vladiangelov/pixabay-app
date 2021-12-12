import React from "react"
import styled from "styled-components"

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 4px 20px 4px;
`

const PageNavButton = styled.p`
  width: 150px;
`

const NextPageButton = styled(PageNavButton)`
  cursor: pointer;
  text-align: right;
  &:hover {
    color: ${({ theme }) => theme.colors.easternBlue};
  }
`

const PreviousPageButton = styled(PageNavButton)`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.easternBlue};
  }
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const PaginationNav = ({ activePage, setActivePage }) => {
  return (
    <Layout>
      {activePage !== 1 ? (
        <PreviousPageButton onClick={() => setActivePage(activePage - 1)}>
          {`<< Previous page`}
        </PreviousPageButton>
      ) : (
        <PageNavButton></PageNavButton>
      )}
      <p>
        <strong>{activePage}</strong>
      </p>
      {activePage !== 10 ? (
        <NextPageButton onClick={() => setActivePage(activePage + 1)}>
          {` Next page >>`}
        </NextPageButton>
      ) : (
        <PageNavButton></PageNavButton>
      )}
    </Layout>
  )
}

export default PaginationNav
