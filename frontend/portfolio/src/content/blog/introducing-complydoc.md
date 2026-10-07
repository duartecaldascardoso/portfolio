---
title: Introducing complydoc
date: 2026-09-15
summary: An open-source tool for analysing documents before they go into an AI pipeline, with visibility on cost, security and information extraction issues.
tags: [complydoc, Open source, Document extraction]
originalSource: LinkedIn
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7505602693969801216/
---

Last week I wrote that the only way to choose between OCR and vision models for document extraction is to run your own document set using both. The first question that should come to mind is what is in those documents, however most teams find out too late.

So I built [complydoc](https://github.com/complydoc/complydoc), an open-source tool for document analysis before integrating into an AI pipeline, providing visibility on cost, security and information extraction issues.

It runs entirely on your machine and with disabled network attempts. Use it from the command line, import it in a notebook, a test suite, the ingestion job itself or in your CI checks.

I am looking forward to feedback on the tool, so try it on your stack of documents and if it misses something.. complain!
