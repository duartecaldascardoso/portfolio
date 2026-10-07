---
title: OCR or vision models? Start with your own documents
date: 2026-09-08
summary: Both OCR and vision LLMs can give great results, but only when you evaluate, compare and iterate on your own documents.
tags: [Document extraction, OCR, Vision models]
originalSource: LinkedIn
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7503045593951297536/
---

Lately there has been a debate about the most efficient way to extract information from a document in a way that an LLM understands. DeepSeek-OCR demonstrated that a given page can be reconstructed from a set of vision tokens at 97 percent precision, and Karpathy even went as far as stating that pixels may beat text as the model input (maybe an image really is worth a thousand words).

That 97 percent was measured on 100 English pages of running text, with compression held under 10x. DeepSeek-OCR-2 arrived in January and improved on every metric they published, and it still names newspapers as a weak spot because a tighter token budget struggles on text-dense pages. The model got better and the same kind of page still broke it.

From my experience both OCR and vision LLMs can give great results, but only when you evaluate, compare and iterate on real results. Every metric can point in the right direction until you hit a PDF with a table that has 3 header rows and merged cells, in a layout that only makes sense to the person who built it.

So before deciding that X beats Y, start with your constraints. How large are the documents, how many arrive, how fast do you need the answer, and could OCR and vision work together on the same page? Then gather your own documents and run them against different models and architectures. The best choice will be the one that makes sense against your real needs.
