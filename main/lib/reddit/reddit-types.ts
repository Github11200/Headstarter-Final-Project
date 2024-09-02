interface RedditListing<T> {
  dist: number;
  children: T[];
  before: string;
  after: string;
}

interface RedditMessageObj {
  kind: "t4";
  data: RedditMessageData;
}

interface RedditListingObj<T> {
  kind: "Listing";
  data: RedditListing<T>;
}

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
