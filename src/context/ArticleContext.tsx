"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Article, Author, Comment } from "../types"

interface ArticleContextType {
  articles: Article[]
  authors: Author[]
  comments: Comment[]
  loading: boolean
}

const ArticleContext = createContext<ArticleContextType>({
  articles: [],
  authors: [],
  comments: [],
  loading: true,
})

export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [authors, setAuthors] = useState<Author[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        // For demo purposes, we'll use mock data

        // Authors data
        const authorsData: Author[] = [
          {
            id: "sarah-johnson",
            name: "Sarah Johnson",
            avatar: "/images/avatar-sarah.png",
            title: "Senior Tech Writer",
            bio: "Sarah is a senior tech writer with over 8 years of experience covering emerging technologies and digital transformation.",
            articleCount: 24,
            followers: 1240,
          },
          {
            id: "emily-davis",
            name: "Emily Davis",
            avatar: "/images/avatar-emily.png",
            title: "Lifestyle Blogger",
            bio: "Emily is a lifestyle blogger, photographer, and wellness advocate passionate about sustainable living and mindfulness.",
            articleCount: 18,
            followers: 950,
          },
          {
            id: "michael-brown",
            name: "Michael Brown",
            avatar: "/images/avatar-michael.png",
            title: "Culture Writer",
            bio: "Michael writes about arts, literature, and cultural trends with a focus on how they shape our society.",
            articleCount: 15,
            followers: 820,
          },
          {
            id: "david-chen",
            name: "David Chen",
            avatar: "/images/avatar-david.png",
            title: "Business Analyst",
            bio: "David analyzes business trends and provides insights on market developments and corporate strategies.",
            articleCount: 20,
            followers: 1100,
          },
        ]

        // Articles data
        const articlesData: Article[] = [
          {
            id: "ai-future",
            slug: "future-of-ai-in-everyday-applications",
            title: "The Future of AI in Everyday Applications",
            excerpt:
              "How artificial intelligence is becoming an invisible but essential part of our daily digital experiences.",
            coverImage: "/images/ai-future.png",
            category: "Technology",
            author: authorsData.find((a) => a.id === "sarah-johnson")!,
            date: "2023-05-15T10:00:00Z",
            content: [
              {
                heading: "The Quiet Revolution",
                text: "Artificial intelligence has moved beyond the realm of science fiction to become an integral part of our everyday digital experiences. At the moment, we wake up and check our personalized news feeds to the recommendations we receive throughout the day, AI is silently working behind the scenes.",
              },
              {
                heading: "Personal Assistants Evolve",
                text: "Voice assistants like Siri, Alexa, and Google Assistant continue to evolve, becoming more conversational and capable of understanding context. The next generation of these assistants will move beyond simple command response interactions to maintain ongoing conversations, remember your preferences, and anticipate your needs.",
              },
              {
                heading: "AI in Content Creation",
                text: "Content creation tools powered by AI are transforming how we write, design, and produce media. From grammar correction and editing suggestions to automated video editing and image generation, these tools are making creative processes more accessible and efficient.",
              },
              {
                heading: "The Challenges Ahead",
                text: "As AI becomes more pervasive in our daily applications, we face important questions about privacy, transparency, and control. Users are increasingly demanding to know how their data is being used to train AI systems and what information is being collected about them.",
              },
              {
                heading: "Looking Forward",
                text: "The future of AI in everyday applications isn't about replacing human capabilities, but augmenting them. The most successful implementations will be those that understand human needs and limitations, and use AI to overcome barriers and enhance our natural abilities.",
              },
            ],
          },
          {
            id: "blockchain-crypto",
            slug: "blockchain-beyond-cryptocurrency",
            title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
            excerpt:
              "Exploring how blockchain technology is transforming industries from supply chain management to healthcare and beyond.",
            coverImage: "/images/blockchain.png",
            category: "Technology",
            author: authorsData.find((a) => a.id === "sarah-johnson")!,
            date: "2023-04-22T14:30:00Z",
            content: [
              {
                heading: "Beyond Digital Currency",
                text: "While blockchain technology gained prominence through cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currencies. The fundamental properties of blockchain—decentralization, immutability, and transparency—make it valuable for numerous industries seeking secure and efficient solutions.",
              },
              {
                heading: "Supply Chain Revolution",
                text: "Blockchain is revolutionizing supply chain management by creating transparent, immutable records of product journeys. Companies can track items from production to delivery, verifying authenticity, reducing fraud, and quickly identifying sources of contamination or defects.",
              },
              {
                heading: "Healthcare Transformation",
                text: "In healthcare, blockchain enables secure sharing of patient data across providers while maintaining privacy and control. Medical records can be accessed with patient permission, ensuring critical information is available when needed while reducing administrative overhead and preventing unauthorized access.",
              },
            ],
          },
          {
            id: "quantum-computing",
            slug: "promise-and-peril-of-quantum-computing",
            title: "The Promise and Peril of Quantum Computing",
            excerpt:
              "Understanding the revolutionary potential of quantum computers and the challenges they pose to current encryption standards.",
            coverImage: "/images/quantum-computing.png",
            category: "Technology",
            author: authorsData.find((a) => a.id === "sarah-johnson")!,
            date: "2023-03-10T09:15:00Z",
            content: [
              {
                heading: "A Computational Revolution",
                text: "Quantum computing represents a fundamental shift in how we process information, leveraging the principles of quantum mechanics to perform calculations that would be practically impossible for classical computers. Unlike traditional bits that exist as either 0 or 1, quantum bits or qubits can exist in multiple states simultaneously through superposition, enabling exponentially greater computational power.",
              },
              {
                heading: "Breaking Encryption",
                text: "Perhaps the most significant immediate impact of quantum computing will be on cybersecurity. Many of today's encryption standards rely on the computational difficulty of factoring large numbers—a task that quantum computers could potentially solve efficiently. This poses a serious threat to current security protocols protecting everything from financial transactions to national security communications.",
              },
              {
                heading: "Quantum Advantage",
                text: 'Scientists and engineers are racing to achieve "quantum advantage"—the point at which quantum computers can solve problems that classical computers cannot in a reasonable timeframe. While we\'ve seen early demonstrations of this capability, practical, error-corrected quantum computers that can tackle real-world problems remain on the horizon.',
              },
            ],
          },
          {
            id: "sustainable-living",
            slug: "sustainable-living-small-changes-big-impact",
            title: "Sustainable Living: Small Changes, Big Impact",
            excerpt:
              "Practical ways to incorporate sustainability into your daily routine without overwhelming your entire lifestyle.",
            coverImage: "/images/sustainable-living.png",
            category: "Lifestyle",
            author: authorsData.find((a) => a.id === "emily-davis")!,
            date: "2023-05-05T11:45:00Z",
            content: [
              {
                heading: "Starting Your Sustainability Journey",
                text: "The path to a more sustainable lifestyle doesn't require dramatic changes overnight. Instead, it's about making a series of small, manageable adjustments that cumulatively reduce your environmental footprint while enhancing your quality of life.",
              },
              {
                heading: "Kitchen Sustainability",
                text: "The kitchen offers numerous opportunities for sustainable practices. Start by reducing food waste through meal planning, proper storage, and creative use of leftovers. A shocking 30-40% of food in the United States goes to waste, so this simple change can have a substantial impact.",
              },
              {
                heading: "Mindful Consumption",
                text: "Before making a purchase, pause to consider whether you truly need the item. When you do need to buy something, look for options that are durable, repairable, and made from sustainable materials. This approach reduces waste and often results in higher-quality possessions that bring more satisfaction.",
              },
              {
                heading: "Energy and Water Conservation",
                text: "Simple habits like turning off lights when leaving a room, unplugging electronics when not in use, and washing clothes in cold water can significantly reduce your energy consumption without requiring any investment.",
              },
              {
                heading: "Community Engagement",
                text: "Sustainable living extends beyond individual actions to community involvement. Support local farmers and businesses, participate in community clean-up events, and share sustainable practices with friends and family in a positive, non-judgmental way.",
              },
            ],
          },
          {
            id: "remote-work",
            slug: "remote-work-culture-building-connection",
            title: "Remote Work Culture: Building Connection Across Distance",
            excerpt:
              "Strategies for creating a strong, cohesive company culture when teams are distributed across different locations.",
            coverImage: "/images/remote-work.png",
            category: "Business",
            author: authorsData.find((a) => a.id === "david-chen")!,
            date: "2023-04-18T13:20:00Z",
            content: [
              {
                heading: "The Remote Revolution",
                text: "The shift to remote work has transformed how organizations operate, creating both challenges and opportunities for building company culture. While physical distance can create barriers to connection, intentional strategies can foster strong relationships and shared values across distributed teams.",
              },
              {
                heading: "Communication Rhythms",
                text: "Establishing consistent communication patterns helps remote teams stay aligned and connected. This includes regular team meetings, one-on-one check-ins, and asynchronous updates. The key is finding the right balance that provides clarity without causing meeting fatigue.",
              },
              {
                heading: "Virtual Team Building",
                text: "Remote teams benefit from dedicated time for non-work interactions. Virtual coffee breaks, online game sessions, and remote team-building activities create opportunities for casual conversation and relationship building that would naturally occur in an office environment.",
              },
            ],
          },
          {
            id: "bookstores",
            slug: "renaissance-of-independent-bookstores",
            title: "The Renaissance of Independent Bookstores",
            excerpt:
              "How local bookshops are thriving in the digital age by creating community spaces and unique experiences.",
            coverImage: "/images/bookstores.png",
            category: "Culture",
            author: authorsData.find((a) => a.id === "michael-brown")!,
            date: "2023-03-25T15:10:00Z",
            content: [
              {
                heading: "Beyond the Algorithm",
                text: 'While online retailers offer convenience and endless selection, independent bookstores provide something algorithms cannot: human connection and discovery. Booksellers who know their customers\' tastes can recommend unexpected titles that would never appear in a digital "you might also like" section.',
              },
              {
                heading: "Community Hubs",
                text: "Today's successful independent bookstores function as community gathering spaces, hosting author readings, book clubs, children's story times, and other events that bring people together around a shared love of literature and ideas.",
              },
              {
                heading: "Curated Experience",
                text: "In contrast to the overwhelming options online, independent bookstores offer carefully curated selections that reflect the interests of their communities and the passions of their owners. This curation creates a more manageable and often more satisfying shopping experience.",
              },
            ],
          },
        ]

        // Comments data with replies
        const commentsData: Comment[] = [
          {
            id: "comment-1",
            articleId: "ai-future",
            author: authorsData.find((a) => a.id === "david-chen")!,
            text: "This article provided such a clear explanation of how AI is becoming integrated into our daily lives. I particularly appreciated the section on personal assistants evolving beyond simple commands.",
            date: "2023-05-16T09:30:00Z",
            likes: 5,
            replies: [
              {
                id: "reply-1",
                author: authorsData.find((a) => a.id === "sarah-johnson")!,
                text: "Thank you for your kind words, David! I'm glad the article helped clarify how AI is evolving in our everyday tools.",
                date: "2023-05-16T11:45:00Z",
                likes: 2,
              },
            ],
          },
          {
            id: "comment-2",
            articleId: "ai-future",
            author: authorsData.find((a) => a.id === "emily-davis")!,
            text: "As someone working in the AI field, I think this article does a great job of balancing the excitement of new capabilities with the very real privacy concerns. It's refreshing to see technology coverage that's thoughtful.",
            date: "2023-05-17T14:45:00Z",
            likes: 8,
            replies: [
              {
                id: "reply-2",
                author: authorsData.find((a) => a.id === "sarah-johnson")!,
                text: "I appreciate that perspective, Emily! It's so important to consider both sides of technological advancement.",
                date: "2023-05-17T16:20:00Z",
                likes: 3,
              },
              {
                id: "reply-3",
                author: authorsData.find((a) => a.id === "michael-brown")!,
                text: "I agree. Too often articles either hype technology without addressing concerns or focus only on the negatives. This balanced approach is much more valuable.",
                date: "2023-05-17T18:05:00Z",
                likes: 4,
              },
            ],
          },
          {
            id: "comment-3",
            articleId: "sustainable-living",
            author: authorsData.find((a) => a.id === "michael-brown")!,
            text: "I've been trying to incorporate more sustainable practices into my routine, and this article gave me several new ideas I hadn't considered. The section on kitchen sustainability was particularly helpful.",
            date: "2023-05-06T16:20:00Z",
            likes: 3,
            replies: [],
          },
        ]

        setAuthors(authorsData)
        setArticles(articlesData)
        setComments(commentsData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return <ArticleContext.Provider value={{ articles, authors, comments, loading }}>{children}</ArticleContext.Provider>
}
