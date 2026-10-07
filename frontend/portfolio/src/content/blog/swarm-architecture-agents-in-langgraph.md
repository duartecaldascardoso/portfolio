---
title: Swarm Architecture Agents in LangGraph
date: 2025-09-10
summary: LangGraph provides several ways to handle multi agent interactions. Knowing these can be beneficial when handling different kinds of use cases which may be more prone towards user interaction or complex research…
tags: [agents, langchain, agentic ai, swarm, langgraph]
originalSource: Medium
originalUrl: https://medium.com/@caldasdcardoso/swarm-architecture-agents-in-langgraph-b8b1b53c61b3
---

LangGraph provides several ways to handle multi agent interactions. Knowing these can be beneficial when handling different kinds of use cases which may be more prone towards user interaction or complex research tasks for example.

Tasks tailored toward expertise and that tend to take several turns/graph runs are often better tackled using a Swarm agent architecture.

> "A swarm is a type of [multi-agent](https://langchain-ai.github.io/langgraph/concepts/multi_agent) architecture where agents dynamically hand off control to one another based on their specializations. The system remembers which agent was last active, ensuring that on subsequent interactions, the conversation resumes with that agent."- langchain-ai

The concept of keeping the active agent in the managed State is powerful when we have workflows that tend to be maintained by the same agent until he is no longer the expert that should be taking care of it.

## Swarms with Subgraphs

One powerful feature in LangGraph is that subgraphs can themselves be compiled as agent units. This means that we do not have the need to treat every agent as a standalone unit - sometimes the agent is actually a subgraph (a workflow compiled to behave as a single agent unit).

For example:

- A **Research Subgraph** could include retrieval, ranking, summarization, and synthesis steps. When compiled, it acts as a single “Research Agent” in the swarm.
- A **Creative Subgraph** could combine brainstorming, filtering, and style-checking nodes before handing output back.

By nesting these subgraphs inside the swarm, you keep complexity manageable while still benefiting from isolated specialists.

## Usage example: Chess Experts in a Swarm

To make this concrete, imagine a small swarm with two agents:

- **The Chess Opening Expert:** explains openings like the Ruy Lopez, Sicilian, or the London.
- **The Chess Coach:** motivates you, shares wisdom, and keeps your mindset strong.

In this setup, the Opening Expert focuses purely on theory, while the Coach ensures you stay in your head during the game. Together, they form a supportive loop — handing off control as needed.

```python
from langgraph.prebuilt import create_react_agent
from langgraph_swarm import create_handoff_tool, create_swarm

## Here we handle the tools that allow the handoff to the different agent experts.
transfer_to_expert = create_handoff_tool(
    agent_name="chess_opening_expert",
    description="Hand control to the Chess Opening Expert when the user wants to learn about chess openings.",
)

transfer_to_coach = create_handoff_tool(
    agent_name="chess_coach",
    description="Hand control to the Chess Coach when the user needs encouragement, motivation, or advice.",
)

## Creating the ReAct agents 
chess_opening_expert = create_react_agent(
    model,
    prompt="""
    You are the Chess Opening Expert. 
    Your job is to explain chess openings in a clear and practical way.
    Stick to theory, strategies, and examples of popular openings.
    """,
    tools=[transfer_to_coach],
    name="chess_opening_expert",
)

chess_coach = create_react_agent(
    model,
    prompt="""
    You are the Chess Coach. 
    Your job is to encourage the player, keep them motivated, 
    and provide wise advice about patience, discipline, and mindset.
    """,
    tools=[transfer_to_expert],
    name="chess_coach",
)

## Setting up the Swarm with our experts
agent_swarm = create_swarm(
    [chess_opening_expert, chess_coach], 
    default_active_agent="chess_opening_expert"
)

app = agent_swarm.compile()
```

Here, the default\_active\_agent is used to signal the agent that should start by interacting with the user. The standard practice is to maintain an active\_agent in the State of the graph ([https://langchain-ai.github.io/langgraph/reference/swarm/#langgraph\_swarm.swarm.SwarmState](https://langchain-ai.github.io/langgraph/reference/swarm/#langgraph_swarm.swarm.SwarmState))

## Considerations

While swarm architectures are powerful, they are not always the best solution. If agents need to constantly hand off control, the interaction can feel fragmented and harder to manage. Likewise, when many agents are involved, each must be equipped with the appropriate hand-off tools for all the possible agents, which increases complexity and coordination overhead. In these cases, a simpler graph design even an architecture such as Supervisor may work better.
