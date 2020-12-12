---
title: "netlify 빌드 시 gatsby-plugin-manifest 에러 발생 건"
date: "2020-12-12T01:54:03.284Z"
description: "gatsbyjs로 블로그 제작 후 netlify로 빌드 시 발생된 문제"
tags: "netlify gatsby gatsby-plugin-manifest에러 에러 error build-error 빌드실패"
---

`블로그를 제작`함에 있어서
first commit이후 꽤 많은 수정이 진행되었는데

설마 `빌드 실패`가 날줄은 상상도 못했다..

## 에러 원인 : 
  * 등록된 npm 패키지의 버전이 구버전이었던 관계로 발생된 문제
## 에러 해결 : 
  * `npm update`

## 에러 현상 : 

```
5:56:18 PM: error "gatsby-plugin-manifest" threw an error while running the onPostBootstrap lifecycle:
5:56:18 PM: Input file contains unsupported image format
5:56:18 PM: 
5:56:18 PM: 
5:56:18 PM:   Error: Input file contains unsupported image format
5:56:18 PM: 
5:56:18 PM: not finished onPostBootstrap - 0.028s
5:56:18 PM: ​
5:56:18 PM: ────────────────────────────────────────────────────────────────
5:56:18 PM:   "build.command" failed                                        
5:56:18 PM: ────────────────────────────────────────────────────────────────
5:56:18 PM: ​
5:56:18 PM:   Error message
5:56:18 PM:   Command failed with exit code 1: gatsby build
5:56:18 PM: ​
5:56:18 PM:   Error location
5:56:18 PM:   In Build command from Netlify app:
5:56:18 PM:   gatsby build
5:56:18 PM: ​
5:56:18 PM:   Resolved config
5:56:18 PM:   build:
5:56:18 PM:     command: gatsby build
5:56:18 PM:     commandOrigin: ui
5:56:18 PM:     publish: /opt/build/repo/public
5:56:18 PM: Caching artifacts
```
