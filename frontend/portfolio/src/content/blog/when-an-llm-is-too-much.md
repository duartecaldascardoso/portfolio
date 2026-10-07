---
title: When an LLM is too much for document extraction
date: 2026-09-22
summary: System One models can handle the extraction steps where we already know which field we want, at a fraction of the price and the time.
tags: [Document extraction, LLMs]
originalSource: LinkedIn
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7508144897275850752/
---

There are many cases in document extraction where using an LLM feels like doing too much. Any use case aided by AI today is probably relying on structured output in order to extract wanted or expected bits of information from provided documents, however watching the introduction of a new kind of model has opened the possibilities here endlessly.

System One models are a breath of fresh air, because they can aid in these sorts of information extraction when we already know what we are expecting, while doing it at a fraction of the price and of the time.

The valuable step now is understanding how these extraction pipelines can be refactored to take advantage of this new kind of model, and there are many ways to go about it. The possible answers can be prepared in advance, so that the model is only ever asked to choose between them, such as asking, of all the amounts printed on this invoice, which one is the total. The document can also be handed over as it is, with the possible answers described in the question, which works nicely for something like a date.

There are almost certainly better ways to arrange this than the two I have mentioned, and working them out is the fun part of having a new kind of model to experiment with.

Of course, most use cases still belong to an LLM. Reasoning, summarising and anything genuinely open ended are all better served there. But for the layer underneath, where we already know which field we want and simply need something to decide, these models are a considerably better fit.
