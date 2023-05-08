import Image from 'next/image'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import thumbDev from '../public/images/links/dev.png'
import { BioSection, BioYear } from '../components/bio'
import thumbMedium from '../public/images/links/medium.png'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogOutOutline, IoMailUnreadSharp } from 'react-icons/io5'
import {Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra, Divider } from '@chakra-ui/react'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        &quot;I propose to consider the question &apos;Can machines think?&apos; As he highlights, the traditional approach to such a question is to start with definitions, defining both the terms &apos;machine&apos; and &apos;think&apos;&quot; - Alan Mathison Turing
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rodrigo Trindade
          </Heading>
          <p>| Data Science Student &bull; Guitarrist &bull; Junk Food lover &bull; Typeracer |</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor=""
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="" textAlign="right">
          Work
        </Heading>
        <Paragraph>
          Hi there, I&apos;m Rodrigo, a beginner Data Scientist with a passion for solving problems
          using data. I recently completed a Systems Developer Associate Degree and i am proficient in Python, R and SQL. I have self experience in data cleaning,
          exploratory data analysis, and data visualization, and I am currently learning more advanced
          topics such as machine learning in my Data Science & Analytics Especialization at Universidade de São Paulo.
          I am excited to use my skills to make a positive impact in the world.{' '}
          {/* <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
          as={NextLink}
          href="https://www.youtube.com/devaslife"
          passHref
          target="_blank"
          >
          Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="center" my={4} textAlign="right">
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            colorScheme='primary'
            rightIcon={<IoLogOutOutline />}
            
          >
            Go to my portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2} >
        <Divider />
        <Heading as="h3" variant="" textAlign="right">
          Bio
        </Heading>
        <BioSection>
        <BioYear>1987</BioYear>
        <p>Born in Belém do Pará, Brazil</p>
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          <p>Move to São Paulo, Brazil</p>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          <p>I worked as an Apple Advisor for 2 and a half years supporting VIP customers for the entire Apple ecosystem</p>
          </BioSection>
        <BioSection>
        <BioYear>2020</BioYear>
         <p>I worked as a Support Analyst for 2 years supporting Java Applications and Infrastructure environments for some Companies Like Prodesp and IAMSP.</p>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <p>Completed the Associate&apos;s Program in the System Analysis and Development field at Faculdade Impacta de Tecnologia.</p>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <p>Complete Extension program in Fundamentals of Statistics, Introduction to R Software and Machine Learning at Universidade de São Paulo - USP.</p>
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          <p>Started Master of Business Administration in Data Science & Analytics at Universidade de São Paulo - USP.</p>
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          <p>I worked as a Aplication Support Analyst supporting Python/Django Applications and Oracle Infrastructure environments for some Companies Like Petrobras and Sys Manager.</p>
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          <p>Scholarship holder in the Data Science & Analytics Especialization at the Universidade de São Paulo - USP.</p>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Divider/>
        <Heading as="h3" variant="" textAlign="center" margin="5">
          Socials
        </Heading>
        <List>
        <SimpleGrid minChildWidth='120px' spacing='20px'>
          <ListItem>
            <Link href="https://github.com/elir0d" target="_blank">
              <Button
                width="10rem"
                variant="solid"
                colorScheme=""
                leftIcon={<IoLogoGithub />}
              >
               github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/elir0d" target="_blank">
              <Button
                width="10rem"
                variant="solid"
                colorScheme=""
                leftIcon={<IoLogoTwitter />}
              >
               Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/rodrigo-trindade-b05b73203/" target="_blank">
              <Button
                width="10rem"
                variant="solid"
                colorScheme=""
                leftIcon={<IoLogoLinkedin />}
              >
               Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/elir0d" target="_blank">
              <Button
                width="10rem"
                variant="solid"
                colorScheme=""
                leftIcon={<IoLogoInstagram />}
              >
               Instagram
              </Button>
            </Link>
          </ListItem>
        </SimpleGrid>
        </List>
        </Section>

        <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Chronicles of a Proletarian"
            thumbnail={thumbMedium}
          >
            My Medium profile ( &gt; 0k subs)
          </GridItem>
          <GridItem
            href="https://dev.to/elir0d"
            title="DEV - Data Science"
            thumbnail={thumbDev}
          >
            My DEV profile ( &gt; 0k subs)
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="" margin="5" textAlign="center">
          Newsletter
        </Heading>
        <p>
          Join me on my learning journey. Weekly updates,
          courses, tutorials, and videos. All in one Place.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.deeplearning.ai/the-batch/"
            scroll={false}
            leftIcon={<IoMailUnreadSharp />}
            colorScheme=""
          >
            Sign up to my Favority Newsletter
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
