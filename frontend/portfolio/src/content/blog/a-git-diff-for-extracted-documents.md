---
title: Why is there no git diff for extracted documents?
date: 2026-09-29
summary: The question that made me start complydoc. Changing a loader changes the text your whole pipeline is built on, and the only way to know what changed is to look at it.
tags: [complydoc, Document extraction, Observability]
originalSource: LinkedIn
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7510685938054959105/
---

This was the question that made me start complydoc. Observability is already part of how we build with AI, especially around agent traces, but that same care still hasn't reached document ingestion pipelines, which exist in almost every regulated domain applying AI to its use cases.

The diff came from there, because changing a loader or updating one changes the text your whole pipeline is built on, and the only way to know what changed is to look at it. So complydoc puts every loader's reading side by side, with the page it came from next to it. An engineer can see exactly what was read from a table, the headings that were lost or a line that was dropped, and decide which loader fits their documents instead of trusting a benchmark.

![complydoc comparing two loaders on the same document](/images/blog/a-git-diff-for-extracted-documents/loader-diff.webp)
*PyPDFLoader and PyMuPDF4LLMLoader reading the same page, with identifiers masked.*

The security flagging comes from the same idea. Documents carry information that was never meant to reach an embedding model or a vector store: names, bank details, tax numbers, instructions hidden in white text. Once they are extracted they travel through every step that comes after, and nobody notices because it's very hard to. complydoc flags them in each loader's reading, preventing them from going deeper into the pipeline, and keeps them masked until you choose to see them.

Try it on your own documents: [complydoc on GitHub](https://github.com/complydoc/complydoc).
