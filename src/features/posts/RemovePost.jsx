import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useRemovePostMutation } from "./postApi";
import toast from "react-hot-toast";

export default function RemovePost({id}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const [removePost,{isLoading}] = useRemovePostMutation();
const handleRemove = async () =>{
    try{
        await removePost(id).unwrap();
        toast.success('Post remove successfully');
    }catch(err){
        toast.error(err.data.message);
    }
}
  return (
    <>

      <Button 
      isLoading={isLoading}
      onPress={onOpen} isIconOnly  color="danger">
            <i class="fa-solid fa-trash"></i>
          </Button>

     
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Are your sure?</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" 
                onPress={()=>{
                    handleRemove();
                    onClose();
                }}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
