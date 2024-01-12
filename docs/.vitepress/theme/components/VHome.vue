<script setup lang="ts">
    import {useData,withBase} from 'vitepress'
    const {site,frontmatter} = useData()
</script>

<template>
    <header class="home-hero">
        <figure class="figure">
            <img class="image" src="./logo.svg" alt="logo" />
        </figure>
        <h1 class="title">AsyncX's Library<sub style="font-weight: 500; font-size: 1.5rem;">{{frontmatter.version}}</sub></h1>
        <p class="description">
            {{ frontmatter.description }}
        </p>

        <div class="actions">
            <a href="/01-intro/design"><button class="btn">开始</button></a>
        </div>
    </header>
</template>

<style scoped>
    .home-hero {
        max-width: 960px;
        margin: 0 auto;
        padding: 70px 32px 32px 32px;
        text-align: center;
        justify-content: center; 
        align-items: center;
    }

    .figure {
        padding: 0 1.5rem;
        padding-top: 30px;
    }

    .image {
        display: block;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
        max-height: 150px;
    }

    .title {
        line-height: 1.3;
        margin-top: 1.5rem;
        font-size: 3.5rem;
        font-weight: 800;
        letter-spacing: -0.5px;
        background-image: radial-gradient(circle, rgba(145,23,255,1) 0%, rgba(90,186,255,1) 100%);
        background-size: auto auto;
        background-clip: border-box;
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


    .description {
        line-height: 1.5;
        color: var(--vt-c-text-2);
        transition: color 0.5s;
        font-size: 22px;
        margin: 8px auto 30px;
    }

    .actions {
        display: flex;
        grid-gap: 0.8rem;
        gap: 0.8rem;
        place-content: center;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }



    .title+.actions {
        margin-top: 30px;
    }

    .actions a {
        font-size: 16px;
        display: inline-block;
        background-color: var(--vt-c-bg-mute);
        padding: 8px 18px;
        font-weight: 600;
        border-radius: 6px;
        transition: background-color 0.5s, color 0.5s;
        color: var(--vt-c-text-code);
    }

    .actions a.primary {
        background-color: var(--vt-c-brand);
        color: #fff;
    }

    .actions a:hover {
        background-color: var(--vt-c-gray-light-4);
        transition-duration: 0.2s;
    }

    .actions a.primary:hover {
        background-color: var(--vt-c-green-dark);
        transition-duration: 0.2s;
    }

    .dark .actions a.primary {
        color: var(--vt-c-indigo);
    }

    .dark .actions a:hover {
        background-color: var(--vt-c-gray-dark-3);
    }

    .dark .actions a.primary:hover {
        background-color: var(--vt-c-green-light);
    }

    @media (max-width: 960px) {
        .title {
            font-size: 2.4rem;
        }

        .description {
            font-size: 20px;
        }
    }

    @media (max-width: 576px) {
        .home-hero {
            padding-bottom: 42px;
        }

        .image {
            max-height: 200px;
        }

        .title {
            font-size: 2.2rem;
        }

        .description {
            font-size: 18px;
        }
    }
</style>