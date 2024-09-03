# Notify Hub
I personally just go to a website to just check for notifications, but one thing leads to another and then you start scroling the endless feed. Not a great use of time.

This is where Notify Hub comes in, **view all your notifications in one place**, no endless feed to distract you.

## How it works 🛠️
Here's the overall architecture diagram:
![image](https://github.com/user-attachments/assets/6e5ab2b2-2083-4153-8579-36a556cc502b)

It's pretty simple, just a Next JS app connected to some APIs. This is quite useful though because the entire architecture is quite modular, we can add and remove APIs with ease and without changing the code for other APIs, we can also add intermediary steps, like websockets, just by changing what functiosn/classes get called.

For the API's we using OAuth so that the user can give us access to their notifications without sharing their passwords, here's how the OAuth works for each API in more detail.
### Gmail
![image](https://github.com/user-attachments/assets/9f9d55ec-4a7e-408b-b1b1-ac29f0a4d0e3)
### Reddit
![image](https://github.com/user-attachments/assets/8c63e56d-1a29-49a8-9e75-c1e34801e5ba)
### Github
![image](https://github.com/user-attachments/assets/acd4cfc2-c2ba-4732-8f12-95c28b2a5fb3)

## Overall tech stack
- Next JS (frontend and backend)
- Tailwind CSS
- Shadcn UI
- Gmail API
- Reddit API
- GitHub API

## Contact ✉️
If you got any questions or feedback feel free to use any of the contacts below:
- Jinay Patel - [LinkedIn](https://www.linkedin.com/in/jinay-patel-6369002b4/), [Email](mailto:jinayunity22@gmail.com)
- Abdelghani Bensalih - [LinkedIn](https://www.linkedin.com/in/abdelghani-bensalih-469155219), [Email](mailto:abdelghaniben40@gmail.com)
- Nebila Wako - [LinkedIn](https://www.linkedin.com/in/nebila-wako-b61632289/), [Email](mailto:nebil7keb@gmail.com)
- Naitik Oza - [LinkedIn](https://www.linkedin.com/in/naitikoza/), [Email](mailto:oza.naitik27@gmail.com)
