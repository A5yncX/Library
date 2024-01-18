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
        <!-- 彩虹按钮 -->
        <div class="actions">
            <a href="/01-intro/design"><button class="btn">开始</button></a>
        </div>
        <!-- 迷幻按钮 -->
        <!-- <button>
            <span>进入</span>  
            <iframe src="data:text/html;base64,PGh0bWw+CiAgICAgICAgICAgIDxoZWFkPgogICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KICAgICAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCBpZnJhbWUsIGNhbnZhc3sKICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT0ibW9kdWxlIj4KICAgICAgICAgICAgICAgICAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0QDE4LjAuMic7CiAgICAgICAgICAgICAgICAgICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjInOwogICAgICAgICAgICAgICAgICAgIGltcG9ydCB7Q2FudmFzLCB1c2VGcmFtZX0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCc7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHR1cmVNZXNoID0gKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gdXNlUmVmKG51bGwpCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCwgc2NlbmUsIGNhbWVyYSB9ID0gc3RhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc2guY3VycmVudCl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCwgbW91c2UueV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLmN1cnJlbnQubWF0ZXJpYWwudW5pZm9ybXMudV90aW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ21lc2gnLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwwLDBdLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGxhbmVHZW9tZXRyeScse2FyZ3M6WzEwMjQsMTAyNF19KSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzaGFkZXJNYXRlcmlhbCcsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgLy8gRnJhZ21lbnQgc2hhZGVyCgovLyBVbmlmb3Jtcwp1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uOwp1bmlmb3JtIHZlYzIgdV9tb3VzZTsKdW5pZm9ybSBmbG9hdCB1X3RpbWU7CnVuaWZvcm0gdmVjMyB1X2NvbG9yOwp1bmlmb3JtIGZsb2F0IHVfc2NhbGU7IAp1bmlmb3JtIGZsb2F0IHVfZGlzdG9ydF9zY2FsZTsKdW5pZm9ybSBmbG9hdCB1X3Bvd2VyOwp1bmlmb3JtIGZsb2F0IHVfc3BlZWQ7CnVuaWZvcm0gZmxvYXQgdV94Owp1bmlmb3JtIGZsb2F0IHVfeTsKdW5pZm9ybSBmbG9hdCB1X2l0ZXJhdGlvbnM7CiAgICAKI2RlZmluZSBwb3dlciAxLgojZGVmaW5lIHpvb21PdXQgMy4KI2RlZmluZSByb3QgMS4KI2RlZmluZSBpdGVyIDUwLgojZGVmaW5lIGh1ZVBvd2VyIDAuNwojZGVmaW5lIGdsb3cgMC41CiNkZWZpbmUgU3BlZWQgMS41CiNkZWZpbmUgV2F2ZVNwZWVkIDIuCiNkZWZpbmUgQnJpZ2h0bmVzcyAwLjUKCnZvaWQgbWFpbigpCnsKICAgIC8vIE5vcm1hbGl6ZWQgcGl4ZWwgY29vcmRpbmF0ZXMgKGZyb20gMCB0byAxKQogICAgdmVjMiB1diA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7CgoJdmVjMiBYWVNjYWxlID0gdmVjMigxLjAtdV9zY2FsZSwxLjAtdV9zY2FsZSk7Cgl2ZWMyIFhZTW92ZSA9IHZlYzIodV94LHVfeSk7CglmbG9hdCBpdGVyYXRpb25zID0gaXRlciAqIHVfaXRlcmF0aW9uczsKCiAgdXYgKj0gem9vbU91dDsKCXV2Lnh5ID0gdXYueHkgKiBYWVNjYWxlOwoJdXYueHkgPSB1di54eSArIFhZTW92ZTsKCXZlYzMgZmluYWxDb2wgPSB2ZWMzKDAsMCwwKTsKCWZsb2F0IGhhbGZEaXN0b3J0ID0gdV9kaXN0b3J0X3NjYWxlIC8gMC41OwoJZmxvYXQgZGlzdG9ydHNjMiA9IHVfZGlzdG9ydF9zY2FsZSAvIHVfZGlzdG9ydF9zY2FsZSArIGhhbGZEaXN0b3J0OwogICAgCglmb3IoZmxvYXQgaSA9IDEuMDsgaSA8IGl0ZXJhdGlvbnM7IGkrKyl7CgkJdXYueCArPSB1X3Bvd2VyIC8gaSAqIHNpbihpICogdV9kaXN0b3J0X3NjYWxlICogdXYueSAtICh1X3RpbWUgKiBTcGVlZCAqIHVfc3BlZWQpKTsKCQl1di55ICs9IHVfcG93ZXIgLyBpICogc2luKGkgKiBkaXN0b3J0c2MyICogdXYueCArICh1X3RpbWUgKiBTcGVlZCAqIHVfc3BlZWQpKTsKCX0KICAgIAoJdmVjMyBjb2wgPSB2ZWMzKHZlYzMoZ2xvdyxnbG93LGdsb3cpL3NpbigodV90aW1lKldhdmVTcGVlZCp1X3NwZWVkKS1sZW5ndGgodXYueXgpIC0gdXYueSkpOwoJZmluYWxDb2wgPSB2ZWMzKGNvbCpjb2wpOwogICAgdmVjMyBDb2xvciA9IHZlYzMoMS4sMS4sMS4pICogQnJpZ2h0bmVzczsKCQogICAgQ29sb3IgPSBDb2xvcipDb2xvciAqIDAuNSArIDAuNSpjb3MoKHVfdGltZSp1X3NwZWVkKSt1di54eXgrdmVjMygwLDIsNCkpICogaHVlUG93ZXI7CgoKICAgIC8vIE91dHB1dCB0byBzY3JlZW4KICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZmluYWxDb2wucmdiICogQ29sb3IsIDEuMCkgKiBwb3dlcjsKfWAsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgLy8gVmVydGV4IHNoYWRlcgoKdm9pZCBtYWluKCkgewogIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7Cn1gLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7InVfY29sb3IiOnsidmFsdWUiOlsxLDAsMF19LCJ1X3NjYWxlIjp7InZhbHVlIjowLjIxfSwidV9kaXN0b3J0X3NjYWxlIjp7InZhbHVlIjowLjUzNX0sInVfcG93ZXIiOnsidmFsdWUiOjAuMTU3fSwidV9zcGVlZCI6eyJ2YWx1ZSI6MC4yMjJ9LCJ1X3giOnsidmFsdWUiOjAuNX0sInVfeSI6eyJ2YWx1ZSI6MC44NTl9LCJ1X2l0ZXJhdGlvbnMiOnsidmFsdWUiOjAuMTIyfSwidV90aW1lIjp7InZhbHVlIjowfSwidV9tb3VzZSI6eyJ2YWx1ZSI6WzAsMF19LCJ1X3Jlc29sdXRpb24iOnsidmFsdWUiOlsxMDI0LDEwMjRdfX0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lTGluZXdpZHRoOiAwLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdGhlcmluZzogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG91YmxlU2lkZWQ6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xzbFZlcnNpb246ICIxMDAiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICApOyAgCiAgICAgICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDYW52YXMsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2w6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAiaGlnaHAiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogImhpZ2gtcGVyZm9ybWFuY2UiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZHByOiBbMiwyXSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYTogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdjogNzUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVhcjogMC4xLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhcjogMTAwMCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsMCw1XQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOnsgaGVpZ2h0OiA1MTIsIHdpZHRoOiA1MTIgfQogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHR1cmVNZXNoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICksIGRvY3VtZW50LmJvZHkpOwogICAgICAgICAgICAgICAgPC9zY3JpcHQ+CiAgICAgICAgICAgIDwvaGVhZD4KICAgICAgICAgICAgPGJvZHk+CjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9seWdpYS5mNzQ5MDU5NC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYWRkLmE1NTI0MGRkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9ib29rLjVmYjExYjhkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9jb2RlLjQyOGIxOGY1LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9vdmVyZmxvdy44ZDUwNDE1ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvY2xvc2UuNjRiODBkMDAuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3RyYXNoLjUyNGRiY2QzLnN2ZyAtLT4KPC9ib2R5PgogICAgICAgIDwvaHRtbD4=" style="border:0;margin:0;width: 512px;height:512px;" />
        </button> -->

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

    /* button{
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  appearance: none;
  border: 0;
  background: 0;
  position: relative;
  color: var(--vt-c-brand);
  font-weight: 400;
  border-radius: 20px;
  overflow: hidden;
  font-family: inherit;
  font-weight: 500;
}
button:after{
  content: '';
  position: absolute;
  inset:0;
  box-shadow: inset 0 0 0 2px rgb(141, 141, 141);
  border-radius: 20px;
  mix-blend-mode: overlay;
}
button iframe{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) scale(1.2) rotate(15deg);
  opacity: 0.25;
  filter: blur(5px);
  transition: all 0.5s ease-in-out;
}
button span{
  position: relative;
  z-index: 1;
  opacity: 0.75;
  color: var(--vt-c-brand);
  transition: all 0.5s ease-in-out;
}
button:hover iframe{
  transform: translate(-50%,-50%) scale(0.5);
  opacity: 1;
  filter: blur(0);
}
button:hover span{
  opacity: 1;
} */
</style>