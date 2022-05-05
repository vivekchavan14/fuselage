import { Message } from './Message';
import { MessageBlock } from './MessageBlock';
import { MessageBody } from './MessageBody';
import { MessageContainer } from './MessageContainer';
import { MessageContainerFixed } from './MessageContainerFixed';
import { MessageDivider } from './MessageDivider';
import { MessageHeader } from './MessageHeader';
import { MessageLeftContainer } from './MessageLeftContainer';
import MessageMetrics from './MessageMetrics';
import { MessageName } from './MessageName';
import { MessageOrderedList } from './MessageOrderedList';
import { MessageOrderedListItem } from './MessageOrderedListItem';
import { MessageParagraph } from './MessageParagraph';
import { MessageRole } from './MessageRole';
import { MessageRoles } from './MessageRoles';
import { MessageTimestamp } from './MessageTimestamp';
import MessageToolbox from './MessageToolbox';
import { MessageUnorderedList } from './MessageUnorderedList';
import { MessageUnorderedListItem } from './MessageUnorderedListItem';
import { MessageUsername } from './MessageUsername';

export * from './MessageDivider';
export * from './MessageGenericPreview';
export * from './MessageStatusIndicator';
export * from './MessageSystem';
export * from './MessageMetrics';
export * from './MessageReactions';
export * from './MessageToolbox';
export * from './ThreadMessage';
export * from './MessageBlock';
export * from './MessageBody';
export * from './MessageContainer';
export * from './MessageContainerFixed';
export * from './MessageHeader';
export * from './MessageLeftContainer';
export * from './MessageName';
export * from './MessageRole';
export * from './MessageRoles';
export * from './MessageTimestamp';
export * from './MessageUsername';
export * from './MessageEmoji';
export * from './MessageParagraph';
export * from './MessageUnorderedList';
export * from './MessageUnorderedListItem';
export * from './MessageOrderedList';
export * from './MessageOrderedListItem';

export default Object.assign(Message, {
  Metrics: MessageMetrics,
  Toolbox: MessageToolbox,
  Container: MessageContainer,
  ContainerFixed: MessageContainerFixed,
  LeftContainer: MessageLeftContainer,
  Header: MessageHeader,
  Body: MessageBody,
  Block: MessageBlock,
  Paragraph: MessageParagraph,
  OrderedList: MessageOrderedList,
  OrderedListItem: MessageOrderedListItem,
  UnorderedList: MessageUnorderedList,
  UnorderedListItem: MessageUnorderedListItem,
  Timestamp: MessageTimestamp,
  Name: MessageName,
  Username: MessageUsername,
  Roles: MessageRoles,
  Role: MessageRole,
  Divider: MessageDivider,
});
