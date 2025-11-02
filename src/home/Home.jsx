import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { useSelector } from "react-redux";
import RemoveUser from "../users/RemoveUser";
import { useNavigate } from "react-router";

export default function Home() {

  const { users } = useSelector((state) => state.userSlice);
  const nav = useNavigate();


  return (
    <div className="p-5 grid grid-cols-3 gap-5">

      {users.map((user, i) => {
        return <Card key={user.id} >
          <CardHeader className="flex gap-3">

            <div className="flex flex-col">
              <p className="text-md">{user.username}</p>
              <p className="text-small text-default-500">{user.email}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{user.description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between">

            <div className="flex gap-5">
              <p>{user.country}</p>
              <p>{user.gender}</p>
            </div>
            <div className="flex gap-5">

              <Button onPress={() => nav(`/edit-user/${user.id}`)} isIconOnly aria-label="Like" color="secondary">
                <i className="fa-solid fa-pen-to-square"></i>

              </Button>
              <RemoveUser index={i} />

            </div>
          </CardFooter>
        </Card>

      })}

    </div>
  )
}


