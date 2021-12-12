import styled from "styled-components"

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

const Layout = styled.div`
  display: flex;
  justify-content: start;
  height: 60px;
`
const Folder = styled.div`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.whiteSmoke : theme.colors.white};
  border-top: solid
    ${({ isActive, theme }) =>
      isActive
        ? `2px ${theme.colors.easternBlue}`
        : `1px ${theme.colors.whiteSmoke}`};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.easternBlue : theme.colors.black};
  width: auto;
  border-left: 1px solid ${({ theme }) => theme.colors.whiteSmoke};
  flex-grow: 1;
  padding: 20px;
  text-align: center;
  ${({ isActive }) => (isActive ? `` : `cursor: pointer;`)}
  &:hover {
    color: ${({ theme }) => theme.colors.easternBlue};
  }
`

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const Folders = ({ folders, activeFolder, setActiveFolder, setActivePage }) => {
  return (
    <Layout>
      {folders.map((folder) => (
        <Folder
          isActive={folder.query === activeFolder.query}
          onClick={() => {
            setActiveFolder(folder)
            setActivePage(1)
          }}
        >
          {folder.query}
        </Folder>
      ))}
    </Layout>
  )
}

export default Folders
