import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Post as PostModel } from "@models/Post";
import ReactMarkdown from "react-markdown";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostModel;
}

export const PostModal = ({ isOpen, onClose, post }: PostModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="outside"
      size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{post.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ReactMarkdown>{post.body + "# Hello. *world*!"}</ReactMarkdown>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
