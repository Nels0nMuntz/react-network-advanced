import { useEffect, useState } from "react";
import { UserDetail } from "./types";
import { get } from "./utilities";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function UserDetailCard({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        setLoading(true);
        const data = await get<UserDetail>(`/users/${id}/details`);
        setDetail(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading || !detail) return <div>Loading...</div>;

  return (
    <Card shadow="none">
      <CardHeader>
        <div className="flex items-center gap-x-4">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`https://i.pravatar.cc/150?u=${detail.id}`}
          />
          <div className="flex flex-col gap-y-4">
            <div>{detail.name}</div>
            <div>{detail.twitter}</div>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>{detail.bio}</p>
      </CardBody>
      <CardFooter>
        <div>
          <p>
            <a href={detail.homepage}>{detail.homepage}</a>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
