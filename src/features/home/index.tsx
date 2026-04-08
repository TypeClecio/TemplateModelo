import { homeContent } from '@data'
import { Badge, Card, InlineCode, LinkButton, Page, Text, Title } from '@shared'

function Home() {
  return (
    <Page>
      <Badge variant="primary">{homeContent.badge}</Badge>
      <Title>{homeContent.title}</Title>
      <Text>
        {homeContent.text} <InlineCode>{homeContent.codePath}</InlineCode>{' '}
        {homeContent.textContinuation}
      </Text>
      <Card>{homeContent.card}</Card>
      <LinkButton to="/about">Ir para About</LinkButton>
    </Page>
  )
}

export default Home
