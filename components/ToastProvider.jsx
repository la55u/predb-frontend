import { useToast } from "@chakra-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ToastProvider = () => {
  const toast = useToast();
  const { id, title, description, status } = useSelector(
    (state) => state.toast
  );

  useEffect(() => {
    if (id)
      toast({
        title,
        description,
        status,
      });
  }, [id]);

  return <></>;
};
