import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import ReactMarkdown from "react-markdown";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal = ({ isOpen, onClose }: PostModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="outside"
      size="6xl">
      <ModalOverlay />
      {((post) => (
        <ModalContent>
          <ModalHeader>{post.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReactMarkdown>{post.body + "# Hello. *world*!"}</ReactMarkdown>
          </ModalBody>
        </ModalContent>
      ))(posts[0])}
    </Modal>
  );
};
