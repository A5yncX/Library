---
title: AsyncX's Library
description: 阅读/技术/心得 存放处
template: splash
hero:
  tagline: 阅读/技术/心得 存放处
  image:
    file: ./logo.svg
  actions:
    - text: 开始
      link: /00-intro/design
---

<style>
.hero h1 {
  line-height: 1.3;
  margin-top: 1.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background-image: radial-gradient(circle, rgba(145,23,255,1) 0%, rgba(90,186,255,1) 100%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.hero p {
  line-height: 1.5;
  color: var(--sl-color-text-accent);
  transition: color 0.5s;
  font-size: 22px;
  margin: 8px auto 30px;
}


@media (max-width: 960px) {
  .hero h1 {
    font-size: 2.4rem;
  }
  .hero p {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .hero {
    padding-bottom: 42px;
  }
  .hero h1 {
    font-size: 2.2rem;
  }
  .hero p {
    font-size: 18px;
  }
}
</style>