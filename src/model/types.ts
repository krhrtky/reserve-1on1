export type Subject = {
  menteeName: string;
  date: string;
  startTime: string;
  endTime: string;
  useMeetingRoom: boolean;
};

export type MailContent = {
  to: string;
  yourName: string;
  prefix: string;
  postfix: string;
};

export type State = {
  subjects: Array<Subject>;
  content: MailContent;
};
