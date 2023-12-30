# Spotify Clone Without a Framework

The inspiration for this project stems from a belief that the state of the web is burdened by unnecessary complexity. Below, I'll address the issues that troubled me and explain how this project offers an alternative perspective.

Firstly, let's engage in an exercise and ask ourselves some questions:

1. Do we genuinely need a web framework, or have we simply forgotten how to program?
2. Are we influenced by other people's problems?

After contemplating these questions, let's delve into a assay.

I found myself in a loop not long ago, unable to build anything without relying on a JS framework (yes, I acknowledge the irony in using JS). I was trapped in this framework-centric mindset for a week until tasked with creating a straightforward payment UI at work using only HTML/CSS/JS. Suddenly, I began questioning why we didn't opt for a framework – "it's easier," "it's maintainable." That was the moment when I paused and pondered if I really needed that framework. While I could replicate the functionality of the framework, I couldn't solve any real problems. Programming, at its core, is about problem-solving.

One aspect we often overlook is that choosing a framework does not necessarily solve the problem; in many cases, it creates another one. This principle applies universally. We've entered a convenience mode where, even though something is easy, we seek something even easier, thinking that it solves any problem. I understand the reasons behind the creation of frameworks and why they offer convenience, but the reality is that most of us don't need them and shouldn't touch them at certain points in our careers.

And that's where the second problem arises—the choice of using a framework. Is it because you really need it, or did some cool programming guy tell you to use it? Is it because it's fast (not blazingly), complete, and top-notch? Is it everything you need to solve problems and propel the web to a greater place? Sounds cheap, doesn't it? We genuinely have a problem when we step into a problem. What may seem dirty, hacky, or weird initially might not be a problem in the moment, and maybe, it won't be a problem at all. I understand the mindset of anxious individuals who anticipate things, but let's breathe and solve problems realistically, addressing the current issue rather than potential future problems.

Creating a glue that connects to a database or using a powerful framework that you don't even understand, which throws weird errors, is not solving the problem. I'm not here to dictate what to do or criticize people but to encourage web developers to reflect on their positions and the state of the web. No more talk—let's start explaining how we're going to solve our problem...


## Defining The Scope Of The Problem

Our challenge here is not to replicate the exact functionality of an application that has been running since 2008 and has a team of experienced developers, of which I am not a part. What we need to accomplish is to demonstrate that, in many cases, you don't necessarily require a framework. This is especially true when you're not building something as complex as Spotify on a daily basis, and likely never will be—I regret to say. My ideia here is not focus on backend, but rather in frontend, maybe we can do later a study case about the backend. Let's adress the problems. 

### Reactivity

We gon to start, how we gon to solve reacivity as in spotify. Let's see how it works. 


As you can observe, there is a lot of reactivity—first when switching from search to home, then when changing the currently playing music, it updates on the right side and at the bottom, and finally in the search. Once again, we are not aiming to replicate everything, but only certain components. The idea here is to leverage the new-old concept of NextJS server components. PHP has already implemented a similar idea, but let's begin the process. 
