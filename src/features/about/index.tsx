import { aboutContent } from '@data'
import { Badge, BulletList, Card, Page, Text, Title } from '@shared'

function About() {
  return (
    <Page>
      <Badge variant="neutral">{aboutContent.badge}</Badge>
      <Title>{aboutContent.title}</Title>
      <Text>{aboutContent.description}</Text>
      <BulletList items={aboutContent.points} />
      <Card variant="dashed">{aboutContent.note}</Card>
    </Page>
  )
}

export default About
