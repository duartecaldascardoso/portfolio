import { Timeline } from '@chakra-ui/react'
import {
    Box,
    Text,
    VStack,
    Container,
    Image,
    HStack,
    Link,
    Heading,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useColorModeValue } from './color-mode'
import { NavLink as RouterLink } from 'react-router-dom'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(120, 120, 120, 0.5);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(120, 120, 120, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(120, 120, 120, 0);
  }
`

export default function TimelinePage() {
    const standardColor = useColorModeValue('gray.800', 'gray.800')
    const titleColor = useColorModeValue('gray.900', 'gray.900')
    const dateColor = useColorModeValue('gray.500', 'gray.500')
    const borderColor = useColorModeValue('gray.200', 'gray.200')

    const activeColor = 'gray.700'

    return (
        <Box overflow="visible" zIndex="1" position="relative">
            <Container maxW="4xl" px={{ base: 4, md: 0 }} position="relative">
                <VStack align="stretch" gap={8} pb={4}>
                    <VStack align="start" gap={2}>
                        <HStack gap={2} fontSize="sm" color="gray.600">
                            <Link asChild _hover={{ textDecoration: 'underline' }}>
                                <RouterLink to="/">Home</RouterLink>
                            </Link>
                            <Text>»</Text>
                            <Text>About Me</Text>
                        </HStack>
                        <Heading size="2xl" color={titleColor}>My Journey</Heading>
                    </VStack>

                    <Timeline.Root size="lg" variant="outline">
                        <Timeline.Item position="relative">
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Born
                                </Text>
                                <Text fontSize="sm" color={dateColor}>
                                    May 10, 2002
                                </Text>
                            </Timeline.Content>
                            <Box
                                position="absolute"
                                left="calc(50% + 200px)"
                                top="-20px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/kid.png`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(-3deg)"
                                        border="4px solid white"
                                        alt="Kid"
                                    />
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item position="relative">
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>Volleyball Player</Text>
                                <Text fontSize="sm" color={titleColor}>Regional Volleyball Team - Porto</Text>
                                <Text fontSize="sm" color={titleColor}>Beach Volleyball National Team</Text>
                                <Text fontSize="sm" color={dateColor}>2008 - 2019</Text>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />

                            <Box
                                position="absolute"
                                right="calc(50% + 275px)"
                                top="-20px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/volleyball.png`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(6deg)"
                                        border="4px solid white"
                                        alt="Volleyball"
                                    />
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item position="relative">
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Classical music studies - guitar
                                </Text>
                                <Text fontSize="sm" color={titleColor}>5th grade level at Academia de Música Vilar do Paraíso</Text>
                                <Text fontSize="sm" color={titleColor}>First place in national guitar contest - Guitarrismos</Text>
                                <Text fontSize="sm" color={dateColor}>2009 - 2016</Text>
                            </Timeline.Content>

                            <Box
                                position="absolute"
                                left="calc(50% + 450px)"
                                top="-20px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/guitar.png`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(-4deg)"
                                        border="4px solid white"
                                        alt="Guitar"
                                    />
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Bachelor's in Software Engineering - ISEP
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Player in the Volleyball team</Text>
                                <Text fontSize="sm" color={titleColor}>Communication - Informatics Student Group</Text>
                                <Text fontSize="sm" color={titleColor}>Vice-President - Informatics Student Group</Text>
                                <Text fontSize="sm" color={dateColor}>September 2020 - September 2023</Text>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />
                        </Timeline.Item>

                        <Timeline.Item position="relative">
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>Chess Coach - Focus Chess</Text>
                                <Text fontSize="sm" color={titleColor}>Player for Academia de Xadrez de Gaia (Ongoing)</Text>
                                <Text fontSize="sm" color={titleColor}>Chess coach for beginner and intermediate students </Text>
                                <Text fontSize="sm" color={dateColor}>July 2022 - February 2023</Text>
                            </Timeline.Content>


                            <Box
                                position="absolute"
                                right="calc(50% + 400px)"
                                top="-60px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/chess.jpg`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(6deg)"
                                        border="4px solid white"
                                        alt="Chess"
                                    />
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Internship at MSG Life Iberia
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Camunda BPMN Process Automation - Insurance POC</Text>
                                <Text fontSize="sm" color={titleColor}>Java backend development and open-source contributions</Text>
                                <Text fontSize="sm" color={dateColor}>February 2023 - June 2023</Text>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Software Engineer at MSG
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Full Stack Engineer - Java, Backbone, PostgreSQL</Text>
                                <Text fontSize="sm" color={titleColor}>Enterprise-grade software for North American clients</Text>
                                <Text fontSize="sm" color={dateColor}>June 2023 - August 2024</Text>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item position="relative">
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Bass player at Mantra Rota
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Musician and song writer within the band</Text>
                                <Text fontSize="sm" color={titleColor}>Learning bass while taking advantage of my musical background</Text>
                                <Text fontSize="sm" color={dateColor}>October 2023 (Ongoing)</Text>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator
                                    bg={activeColor}
                                    animation={`${pulse} 2s infinite`}
                                />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />

                            <Box
                                position="absolute"
                                right="calc(50% + 450px)"
                                top="-20px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/bass.jpg`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(-6deg)"
                                        border="4px solid white"
                                        alt="Bass Guitar"
                                    />
                                </Box>
                            </Box>

                            <Box
                                position="absolute"
                                left="calc(50% + 420px)"
                                top="-40px"
                                display={{ base: 'none', md: 'block' }}
                                width="200px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/msg.png`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(0deg)"
                                        border="4px solid white"
                                        alt="MSG"
                                    />
                                    <svg width="100" height="120" style={{ position: 'absolute', left: '-100px', top: '-25px' }}>
                                        <path d="M90,110 Q50,80 10,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                                    </svg>
                                    <svg width="100" height="120" style={{ position: 'absolute', left: '-100px', top: '130px' }}>
                                        <path d="M90,10 Q50,60 10,110" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                                    </svg>
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    AI Engineer at MSG
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Built a fully automated RAG pipeline for an AI assistant</Text>
                                <Text fontSize="sm" color={titleColor}>Building Agentic AI solutions for the company</Text>
                                <Text fontSize="sm" color={dateColor}>August 2024 - July 2026</Text>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item position="relative">
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    Master's in Software Engineering - FEUP
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Thesis: Product Validation Accelerator Engine (19/20)</Text>
                                <Text fontSize="sm" color={titleColor}>Final grade 18/20</Text>
                                <Text fontSize="sm" color={dateColor}>September 2024 - July 2026</Text>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator bg={standardColor} />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />

                            <Box
                                position="absolute"
                                left="calc(50% + 200px)"
                                bottom="-75px"
                                display={{ base: 'none', md: 'block' }}
                                width="160px"
                            >
                                <Box position="relative">
                                    <Image
                                        src={`${import.meta.env.BASE_URL}config/feup.png`}
                                        borderRadius="xl"
                                        shadow="xl"
                                        transform="rotate(6deg)"
                                        border="4px solid white"
                                        alt="FEUP"
                                    />
                                </Box>
                            </Box>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={borderColor} />
                                <Timeline.Indicator
                                    bg={activeColor}
                                    animation={`${pulse} 2s infinite`}
                                />
                            </Timeline.Connector>
                            <Timeline.Content
                                flex="1"
                                alignItems={{ base: 'flex-start', md: 'flex-start' }}
                                textAlign={{ base: 'left', md: 'inherit' }}
                            >
                                <Text fontSize="lg" fontWeight="bold" color={titleColor}>
                                    AI Engineer at DareData
                                </Text>
                                <Text fontSize="sm" color={titleColor}>Agentic and document-intelligence solutions for financial clients</Text>
                                <Text fontSize="sm" color={dateColor}>July 2026 (Ongoing)</Text>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline.Root>
                </VStack>
            </Container>
        </Box>
    )
}
