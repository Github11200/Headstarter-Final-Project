# API documentation

I've added in code in `/dashboard/page.tsx` that first checks if we already have the tokens stored in the cookies, if we do then you can directly just call the functions below. If we don't then that means the user has not connected their accounts, which means the functions below **will not work**.

## Reddit
Once the user add's their account in using the "Connect Reddit Account" button you can simply call the function `getRedditNotifications()` in the `/lib/reddit` folder. This will give an array of notifications with the following type:

```ts
export default interface RedditMessageData {
  associated_awarding_id: string;
  author_fullname: string;
  author: string;
  body_html: string;
  body: string;
  context: string;
  created_utc: number;
  created: number;
  dest: string;
  distinguished: string;
  first_message_name: string;
  first_message: number;
  id: string;
  likes: boolean | null;
  name: string;
  new: boolean;
  num_comments: number;
  parent_id: string;
  replies: "" | RedditListingObj<RedditMessageObj>;
  score: number;
  subject: string;
  subreddit_name_prefixed: string;
  subreddit: string;
  type: "unknown" | "comment_reply";
  was_comment: boolean;
}
```

## Gmail
Once the user has added their Gmail account using the "Connect Gmail Account" button, you can simply call this function to get unread emails in their inbox, `getGmailNotifications()`. Since we don't want to get all the unread emails, filter them by the ones that they have today.

This is what it will return, it will be an array of notifications:
```ts
export default interface GmailNotification {
  id: string;
  snippet: string;
  subject: string;
}
```

## GitHub
Once the user has added their Gmail account using the "Connect GitHub Account" button, you can simply call this function to get unread emails in their inbox, `getGitHubNotifications()`.

This will give you an array of notifications of the following type:

```ts
export default interface Notification {
  id: string;
  unread: boolean;
  reason: string;
  updated_at: string;
  last_read_at: string;
  subject: {
    title: string;
    url: string | null;
    latest_comment_url: string | null;
    type: string;
  };
  repository: {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: object; // Replace with the specific type if available
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
  };
  url: string;
  subscription_url: string;
}
```