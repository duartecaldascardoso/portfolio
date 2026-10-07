---
title: Owning a capable model is open to everyone now
date: 2026-10-07
summary: Open-weight models good enough for most document extraction are here, and renting the GPUs to run them can beat hosted API prices. What regulated teams should weigh before moving.
tags: [Open weights, Document extraction, Regulated industries]
originalSource: LinkedIn
originalUrl: https://www.linkedin.com/feed/update/urn:li:activity:7513523334899187714/
---

Mistral released Large 4 yesterday, with the open weights coming later this month. Three days earlier Aleph Alpha put out Kolibri-1 under Apache 2.0, and the Chinese labs (Qwen, DeepSeek, Kimi) have been publishing open weights at this level for a while. A model that is performant and capable of dealing with most document extraction workflows is now openly available.

These are mixture-of-experts models, so a fraction of the network works on each token (49B of Large 4's 1T parameters). Mistral trained it on 3,800 GPUs in its own European datacenters. This is a good sign that labs are doing more with less.

For teams in regulated industries this is a big step forward, because knowing where the documents go is often a blocker. With open weights you decide where the model runs, which version, and who gets to see the pages.

You don't need to buy the hardware either. Companies like Nebius, Scaleway and OVHcloud rent GPUs by the hour, and Ornn priced what that means last month for a 120B mixture-of-experts model. On an A100, a 2020 card that Ornn's index puts at about $1 an hour, a million output tokens cost 29 cents with the GPU busy half the time. It beats the hosted API price for the same model (60 cents) once it is busy about a quarter of the day, and on an H100 a bit over half. Against the $10 that Claude Sonnet 5.5 and GPT-6.1 Sol charge, it gets there in under an hour.

So before migrating, a company has to assess its use cases: how many pages arrive per day, how steady that number stays across the 24 hours, and whether it has the people to run the setup.

My opinion is that we are quietly moving towards a space where owning a capable model is open to everyone. The weights are free and available, and compute is what you still pay for. That is why efficient setups matter: open weights do the heavy reading, and decision models like TypeSafe's Jev or the Decisions API OpenAI released this week take the fast calls (classify, route, extract) for cents per million tokens. For companies with big document loads these setups are worth an experiment.
