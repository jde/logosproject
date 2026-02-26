"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ArchitecturePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("logos-auth");
      if (auth !== "authenticated") {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading...</div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      {/* Header */}
      <header className="relative border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/research" className="text-3xl font-light text-amber-400 hover:text-amber-300">λ</a>
            <span className="text-slate-500">/</span>
            <span className="text-lg font-medium">System Architecture</span>
          </div>
          <span className="text-sm text-slate-500">v2.0.0</span>
        </div>
      </header>

      {/* Article */}
      <article className="relative max-w-4xl mx-auto px-6 py-12">
        {/* Title Block */}
        <header className="mb-12 pb-8 border-b border-slate-800">
          <h1 className="text-4xl font-bold mb-4">
            Logos: An Epistemological Engine for Discourse Analysis
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            Technical Architecture Document — Version 2.0.0
          </p>
          <div className="text-sm text-slate-500">
            <p>The Logos Project</p>
            <p>February 2026</p>
          </div>
        </header>

        {/* Abstract */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">Abstract</h2>
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 text-slate-300 leading-relaxed">
            <p>
              Logos is an intelligence platform designed to track the flow of discourse across domains where language shapes outcomes. The system ingests information from heterogeneous sources, extracts structured knowledge through large language model (LLM) pipelines, and maintains complete provenance chains following the W3C PROV-DM standard. This document describes the theoretical foundations, system architecture, data models, and processing pipelines that comprise version 2.0.0 of the platform.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <nav className="mb-12 bg-slate-800/20 rounded-lg p-6 border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Contents</h3>
          <ol className="space-y-2 text-slate-300">
            <li><a href="#introduction" className="hover:text-amber-400">1. Introduction</a></li>
            <li><a href="#theoretical-foundation" className="hover:text-amber-400">2. Theoretical Foundation</a></li>
            <li><a href="#system-architecture" className="hover:text-amber-400">3. System Architecture</a></li>
            <li><a href="#data-models" className="hover:text-amber-400">4. Data Models</a></li>
            <li><a href="#processing-pipeline" className="hover:text-amber-400">5. Processing Pipeline</a></li>
            <li><a href="#rag-system" className="hover:text-amber-400">6. Retrieval-Augmented Generation</a></li>
            <li><a href="#user-interfaces" className="hover:text-amber-400">7. User Interfaces</a></li>
            <li><a href="#changelog" className="hover:text-amber-400">8. Changelog</a></li>
          </ol>
        </nav>

        {/* 1. Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Introduction</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">1.1 Definition of Logos</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            In the context of this system, <em>Logos</em> refers to information that effects reality—ideas that lead to action, facts that drive reason, claims that shape behavior. The ancient Greeks understood λόγος as the principle of reason and order underlying reality. We study logos in a modern context, tracking how language, properly deployed, becomes action and shapes the world.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A news article is not Logos. But it may <em>contain</em> Logos—in the entities it references, the arguments it constructs, the claims it makes about reality. The system&apos;s purpose is to identify, extract, and track these signal-bearing elements from the noise of the information ecosystem.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">1.2 The Problem Space</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The modern information environment presents a fundamental challenge: the volume of produced content far exceeds human capacity for processing. Within this cacophony exists signal—information with potential to matter, to effect outcomes, to drive decisions. Finding that signal manually is intractable. The cost of scanning everything exceeds the value of finding the important things.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">1.3 Design Goals</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Logos is designed as an <strong>epistemological engine</strong> that:
          </p>
          <ol className="list-decimal list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li><strong>Ingests</strong> the flood of information from RSS, APIs, and web content</li>
            <li><strong>Extracts</strong> entities, claims, arguments, and relationships via LLM pipelines</li>
            <li><strong>Classifies</strong> and tags discovered content with dynamic taxonomies</li>
            <li><strong>Grounds</strong> multiple instances to singular concepts through entity deduplication</li>
            <li><strong>Measures</strong> signal strength through source authority, volume, specificity, and novelty</li>
            <li><strong>Delivers</strong> curated digests of what matters, surfaced to the user</li>
          </ol>
        </section>

        {/* 2. Theoretical Foundation */}
        <section id="theoretical-foundation" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Theoretical Foundation</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">2.1 The W3C PROV-DM Standard</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Logos implements the <a href="https://www.w3.org/TR/prov-dm/" className="text-amber-400 hover:text-amber-300 underline" target="_blank" rel="noopener noreferrer">W3C PROV-DM standard</a>—a formal model for describing the provenance of digital artifacts. Every piece of information in Logos carries its complete lineage, answering: <em>Where did this come from? How was it transformed? Who is responsible?</em>
          </p>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 my-6">
            <h4 className="text-lg font-semibold text-white mb-4">PROV-DM Core Concepts</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <strong className="text-white">Entities</strong> — Data objects at any stage of the pipeline: source documents, extracted claims, entity mentions, computed analyses, and final reports.
              </li>
              <li>
                <strong className="text-white">Activities</strong> — Transformations that create or modify entities: document ingestion, NLP extraction, entity resolution, claim verification, and summarization.
              </li>
              <li>
                <strong className="text-white">Agents</strong> — The actors responsible: original publishers, news organizations, automated pipelines, LLM processors, and human reviewers.
              </li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            This creates a complete accountability graph. When Logos reports &ldquo;Organization X made Claim Y on Date Z,&rdquo; the assertion can be traced through every extraction and transformation step, back to the original publication—with full transparency into the methods used.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">2.2 Epistemological Authority</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Any authority of the claims made by Logos falls through directly to the source material combined with the logical validity of the transformation methods. The PROV model provides the most rigorous framework available for combining source attribution with chain of custody. This design principle—that authority derives from traceable provenance rather than assertion—is fundamental to the system&apos;s epistemic stance.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">2.3 Signal Detection Proxies</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            We cannot trace direct causal effects from information to action. However, we can identify <em>potential</em> for effect through structural analysis and proxy measurement:
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm text-slate-300">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-3 pr-4">Proxy</th>
                  <th className="text-left py-3">Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Source Authority</td>
                  <td className="py-3">Trusted sources more likely to contain actionable truth</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Volume</td>
                  <td className="py-3">Ideas that propagate widely have momentum</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Specificity</td>
                  <td className="py-3">Concrete claims about specific entities are more actionable</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Novelty</td>
                  <td className="py-3">New information has higher potential to change behavior</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Grounding</td>
                  <td className="py-3">Claims that connect to verifiable entities are more real</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. System Architecture */}
        <section id="system-architecture" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. System Architecture</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">3.1 Three Pillars Model</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The system is organized around three functional pillars:
          </p>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 my-6 font-mono text-sm">
            <pre className="text-slate-300 overflow-x-auto">{`┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  INGESTION  │ ──▶ │  WORKFLOWS  │ ──▶ │   OUTPUT    │
│             │     │             │     │             │
│ Bring in    │     │ Process     │     │ Surface     │
│ information │     │ transform   │     │ deliver     │
└─────────────┘     └─────────────┘     └─────────────┘`}</pre>
          </div>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Ingestion Layer</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Mechanisms to bring information in from heterogeneous sources. Current implementation supports RSS feeds, sitemaps, Google News search queries, headless browser page capture, and manual URL submission. Every ingested item becomes a Document entity with full provenance tracking.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Workflow Layer</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Series of Activities (in PROV terminology) taken on Entities, creating new Entities while maintaining provenance relationships. Key workflows include document cleaning, entity extraction, classification, image filtering, topic relevance scoring, and semantic embedding.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Output Layer</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            User interfaces, query APIs, and digests that surface what matters. Includes the mobile triage application, operations dashboard, project workspaces, and RAG-powered chat interface.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">3.2 Technology Stack</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm text-slate-300">
              <thead className="text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="text-left py-3 pr-4">Component</th>
                  <th className="text-left py-3 pr-4">Technology</th>
                  <th className="text-left py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">API Server</td>
                  <td className="py-3 pr-4">Next.js 15 (App Router)</td>
                  <td className="py-3">REST API, server-side rendering, WebSocket support</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Mobile Application</td>
                  <td className="py-3 pr-4">React Native (Expo)</td>
                  <td className="py-3">Cross-platform triage and research interface</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Database</td>
                  <td className="py-3 pr-4">PostgreSQL + pgvector</td>
                  <td className="py-3">Relational storage with vector similarity search</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">ORM</td>
                  <td className="py-3 pr-4">Prisma</td>
                  <td className="py-3">Type-safe database access and migrations</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">LLM Runtime</td>
                  <td className="py-3 pr-4">Ollama</td>
                  <td className="py-3">Local LLM inference (llama3.2, mistral, etc.)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Object Storage</td>
                  <td className="py-3 pr-4">MinIO</td>
                  <td className="py-3">Document images and asset storage</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Browser Automation</td>
                  <td className="py-3 pr-4">Puppeteer</td>
                  <td className="py-3">Headless page fetching, JS execution, lazy-load support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">3.3 Worker Pool Architecture</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            LLM tasks are processed through a parallel worker pool with configurable concurrency (1-16 workers). The pool implements priority-based task scheduling, exponential backoff retry logic, and transactional processing to prevent data loss on worker failure.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Task types include: <code className="text-amber-400 bg-slate-800 px-1 rounded">CLEAN_DOCUMENT</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">EXTRACT_ENTITIES</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">CLASSIFY</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">FETCH_IMAGES</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">SUMMARIZE</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">EXTRACT_EXCERPTS</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">SCORE_TOPIC_RELEVANCE</code>, and <code className="text-amber-400 bg-slate-800 px-1 rounded">EMBED_DOCUMENT</code>.
          </p>
        </section>

        {/* 4. Data Models */}
        <section id="data-models" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Data Models</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">4.1 Core Entities</h3>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Source</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Represents an information origin. Types include <code className="text-amber-400 bg-slate-800 px-1 rounded">RSS</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">SITEMAP</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">API</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">MANUAL</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">NEWS_SEARCH</code> (Google News), and <code className="text-amber-400 bg-slate-800 px-1 rounded">SITE_WATCHER</code> (headless browser monitoring). Each source has configurable fetch cadence, priority, and optional review requirements.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">URL (formerly Morsel)</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            A queued pointer to information we should acquire. URLs progress through states: <code className="text-amber-400 bg-slate-800 px-1 rounded">REVIEW</code> → <code className="text-amber-400 bg-slate-800 px-1 rounded">PENDING</code> → <code className="text-amber-400 bg-slate-800 px-1 rounded">PROCESSING</code> → <code className="text-amber-400 bg-slate-800 px-1 rounded">ACQUIRED</code> (or <code className="text-amber-400 bg-slate-800 px-1 rounded">FAILED</code>). Priority rules automatically adjust URL priority based on content patterns.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Document</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            An acquired information object. Contains raw content (pre-processing), cleaned content (post-LLM extraction), extracted metadata (title, author, publish date), classification tags, and processing status flags. Documents may be discarded if the LLM determines no valid content exists (e.g., paywalls, error pages, video-only content).
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Entity</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            A named thing extracted from documents: people, organizations, places, events, products, legislation, concepts. Entities have dynamic types (configurable taxonomy), aliases for deduplication, and descriptions generated by LLM to provide standalone encyclopedic context.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Reference</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            The junction between Documents and Entities, representing a mention with context. Includes the mention type (e.g., <code className="text-amber-400 bg-slate-800 px-1 rounded">SUBJECT</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">MENTIONED</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">QUOTED</code>, <code className="text-amber-400 bg-slate-800 px-1 rounded">REFERENCED</code>), sentiment analysis, and the surrounding context text.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">4.2 Project System</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Projects are research lenses over global content. Unlike traditional folder systems, documents and entities are shared globally; Projects create <em>Inclusions</em>—relational links with project-specific meaning.
          </p>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Inclusion Model</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <code className="text-amber-400 bg-slate-800 px-1 rounded">DocumentInclusion</code> and <code className="text-amber-400 bg-slate-800 px-1 rounded">EntityInclusion</code> link content to Projects with:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li><strong>Method</strong> — How it arrived: SEED, AUTO (topic match), MANUAL, BRIDGED (entity discovery)</li>
            <li><strong>Relevance Score</strong> — 0-100 project-specific importance</li>
            <li><strong>Workflow State</strong> — NEW → SEEN → INTEGRATED or EXCLUDED</li>
            <li><strong>Seed Depth</strong> — Distance from initial seed content (for citation trails)</li>
          </ul>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">ProjectNote</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Inline annotations on documents or entities within a project context. Notes can be anchored to specific text selections (character offsets) or attached as general comments. This enables collaborative research annotation without modifying the underlying global content.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">4.3 Topic System</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Topics provide discovery-driven content organization with two operational modes:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li><strong>DISCOVERY</strong> — Actively acquire content matching topic criteria (creates NEWS_SEARCH sources)</li>
            <li><strong>EXCLUSION</strong> — Filter out matching content (no fetching, filtering only)</li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            Topics form hierarchies (parent/child relationships) with cached document and entity counts that roll up from children. Topics can be linked to Entities, enabling the &ldquo;entity-topic duality&rdquo;—an organization like &ldquo;OpenAI&rdquo; can be both a tracked Entity and a Topic for discovering related content.
          </p>
        </section>

        {/* 5. Processing Pipeline */}
        <section id="processing-pipeline" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Processing Pipeline</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">5.1 Document Ingestion Flow</h3>
          
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 my-6 font-mono text-sm">
            <pre className="text-slate-300 overflow-x-auto">{`Source Fetch
     │
     ▼
URL Created (PENDING)
     │
     ▼
Page Fetcher (Puppeteer)
├── JS execution
├── Lazy-load triggers  
├── Redirect resolution
│
     ▼
Document Created (raw_content)
     │
     ▼
LLM: CLEAN_DOCUMENT
├── Article extraction
├── Title/author/date parsing
├── Asset identification
├── Discard decision (paywall, video, error)
│
     ▼
LLM: EXTRACT_ENTITIES
├── Named entity recognition
├── Type classification
├── Description generation
├── Fuzzy deduplication
│
     ▼
LLM: CLASSIFY
├── Category assignment
├── Dynamic tag scoring
│
     ▼
LLM: FETCH_IMAGES
├── Image URL extraction
├── LLM filtering (ads, logos, icons)
├── MinIO storage
│
     ▼
LLM: EXTRACT_EXCERPTS (on demand)
├── Overview generation
├── Key points extraction
├── Quote identification
├── Claim extraction
│
     ▼
EMBED_DOCUMENT (if RAG enabled)
├── Chunk generation
├── Embedding computation
└── Vector storage`}</pre>
          </div>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">5.2 LLM Task System</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Document processing tasks are defined in the <code className="text-amber-400 bg-slate-800 px-1 rounded">DocumentTaskType</code> registry with configurable priority, dependencies, and version tracking. When a task type&apos;s prompt or logic changes significantly, the version is incremented, triggering re-execution for documents processed with older versions.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Each execution is recorded in <code className="text-amber-400 bg-slate-800 px-1 rounded">DocumentTaskExecution</code> with timing metrics, success/failure status, model used, and task-specific output data. This provides complete observability into pipeline performance and enables systematic prompt engineering.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">5.3 Prompt Management</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Prompts are centralized in a type-safe prompt registry with:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li>Version tracking (seeded to database on startup)</li>
            <li>Variable substitution via <code className="text-amber-400 bg-slate-800 px-1 rounded">preparePrompt()</code> utility</li>
            <li>Structured output schemas for JSON validation</li>
            <li>Full prompt inspection in operations dashboard</li>
          </ul>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">5.4 Delete &amp; Learn System</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            When users delete content, the system captures deletion context via <code className="text-amber-400 bg-slate-800 px-1 rounded">DeletionAudit</code> records: reason, category, extracted keywords, URL patterns, and optional source blocking. This feeds back into:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li>Priority rules for automatic URL deprioritization</li>
            <li>Exclusion topics for content filtering</li>
            <li>Source review requirements</li>
            <li>Similarity-based cleanup of related content</li>
          </ul>
        </section>

        {/* 6. RAG System */}
        <section id="rag-system" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Retrieval-Augmented Generation</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">6.1 Architecture Overview</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The RAG system enables semantic search and conversational exploration of project content. It reframes the Project as a <em>RAG pipeline builder</em>—every user action (starring, rating, noting, excluding) improves the retrieval corpus for natural language queries.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">6.2 Document Embedding</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Documents are chunked with configurable size and overlap parameters, then embedded using Ollama embedding models (nomic-embed-text, mxbai-embed-large). Embeddings are stored in PostgreSQL via the pgvector extension, enabling efficient similarity search.
          </p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">6.3 Search and Chat APIs</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li><strong>Project Search</strong> — <code className="text-amber-400 bg-slate-800 px-1 rounded">/api/projects/[id]/search</code> — Semantic similarity search within project scope</li>
            <li><strong>Project Chat</strong> — <code className="text-amber-400 bg-slate-800 px-1 rounded">/api/projects/[id]/chat</code> — Conversational interface with conversation history and source citations</li>
            <li><strong>Global Search</strong> — <code className="text-amber-400 bg-slate-800 px-1 rounded">/api/search</code> — Node-wide semantic search</li>
            <li><strong>Global Chat</strong> — <code className="text-amber-400 bg-slate-800 px-1 rounded">/api/chat</code> — Conversational interface across all indexed content</li>
          </ul>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">6.4 Configurable Parameters</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li>Chunk size and overlap</li>
            <li>Similarity threshold for retrieval</li>
            <li>Retrieval weights (balancing recency, relevance, user signals)</li>
            <li>Context window size for chat</li>
          </ul>
        </section>

        {/* 7. User Interfaces */}
        <section id="user-interfaces" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">7. User Interfaces</h2>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-3">7.1 Mobile Application</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The mobile app (React Native/Expo) is designed for efficient content triage with four primary tabs:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li><strong>Discover</strong> — Unified view of Topics, Sources, Entities, and Documents with segmented control</li>
            <li><strong>Projects</strong> — Project workspaces with swipeable triage cards</li>
            <li><strong>Status</strong> — Pipeline health dashboard (URL queue, LLM tasks, RAG indexing)</li>
            <li><strong>Settings</strong> — LLM model selection, worker pool configuration, RAG settings</li>
          </ul>

          <h4 className="text-lg font-medium text-white mt-6 mb-2">Swipe Triage Interface</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Project dashboard implements swipe gestures for rapid content triage:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li>Right swipe → Keep (moves to SEEN state)</li>
            <li>Left swipe → Exclude (with optional reason capture)</li>
            <li>Long press → Integrate (mark as used/processed)</li>
            <li>Haptic feedback on all interactions</li>
            <li>5-second undo window with optimistic UI updates</li>
          </ul>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">7.2 Operations Dashboard</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Web-based dashboard for pipeline monitoring and debugging:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
            <li>Source management with fetch history and error tracking</li>
            <li>Document browser with full content inspection</li>
            <li>Entity explorer with type filtering and relationship graphs</li>
            <li>LLM task queue with priority controls and full prompt inspection</li>
            <li>Deletion history with audit trail and learning rule creation</li>
            <li>Cleaning queue for bulk review of similar unwanted content</li>
          </ul>
        </section>

        {/* 8. Changelog */}
        <section id="changelog" className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-400 mb-4">8. Changelog</h2>
          
          <div className="space-y-8">
            {/* v2.0.0 */}
            <div className="border-l-2 border-amber-400 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">v2.0.0 — February 2026</h3>
              <p className="text-slate-400 text-sm mb-4">Major architecture revision and feature expansion</p>
              
              <h4 className="text-lg font-medium text-amber-400/80 mb-2">Added</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4 mb-4 text-sm">
                <li>RAG system with semantic search and project chat</li>
                <li>Document embedding pipeline with configurable chunking</li>
                <li>Mobile app UX redesign with 4-tab navigation</li>
                <li>Project dashboard with swipe triage gestures</li>
                <li>Document breakdown feature (EXTRACT_EXCERPTS task)</li>
                <li>Site watcher for browser-based page monitoring</li>
                <li>Dynamic document classification with categories and tags</li>
                <li>Image storage with MinIO and LLM filtering</li>
                <li>Delete &amp; Learn system with audit trails</li>
                <li>ProjectNote model for inline annotations</li>
                <li>Priority rules for automatic URL prioritization</li>
              </ul>

              <h4 className="text-lg font-medium text-amber-400/80 mb-2">Changed</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4 mb-4 text-sm">
                <li>Renamed &ldquo;morsel&rdquo; to &ldquo;URL&rdquo; for clarity</li>
                <li>Entity extraction prompt now produces standalone encyclopedic descriptions</li>
                <li>Worker pool defaults to 1 worker (Ollama serializes internally)</li>
                <li>Standardized TypeScript array syntax throughout</li>
              </ul>
            </div>

            {/* v1.0.0 */}
            <div className="border-l-2 border-slate-600 pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">v1.0.0 — January 2026</h3>
              <p className="text-slate-400 text-sm mb-4">Initial release</p>
              
              <h4 className="text-lg font-medium text-slate-400 mb-2">Features</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4 text-sm">
                <li>Content ingestion pipeline (RSS, sitemap support)</li>
                <li>Headless browser page fetcher with JS execution</li>
                <li>LLM-based document cleaning and entity extraction</li>
                <li>Topic system with discovery and exclusion modes</li>
                <li>Project system with inclusions</li>
                <li>Mobile app with ingestion dashboard</li>
                <li>Operations dashboard for pipeline monitoring</li>
                <li>Parallel LLM worker pool</li>
                <li>WebSocket real-time updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            The Logos Project — Technical Architecture Document v2.0.0
          </p>
          <p className="text-slate-600 text-xs text-center mt-2">
            For internal research use
          </p>
        </footer>
      </article>
    </main>
  );
}
