import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fetcher from "../../lib/fetcher";
import LoadingSkeleton from "./loadingSkeleton";

const Related = () => {
  const { data, isLoading, isError } = fetcher("/api/trending");
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" mb={3}>
        Related
      </Typography>
      {isLoading ? (
        <LoadingSkeleton />
      ) : isError ? (
        "Error"
      ) : (
        data.map((item) => (
          <Card
            component={Link}
            href={`/posts/${item.id}`}
            key={item.id}
            elevation={0}
            sx={{
              display: "flex",
              mb: 2,
              height: "200px",
              bgcolor: "#fafafa",
              textDecoration: "none",
            }}
          >
            <CardMedia>
              <Image
                src={item.img}
                style={{ objectFit: "cover" }}
                width={"200"}
                height={200}
              />
            </CardMedia>
            <CardContent>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ color: "orange" }}>
                  {item.category}
                </Typography>
                <Typography>- {item.published}</Typography>
              </Box>
              <Typography variant="body1" py={1} sx={{ color: "black" }}>
                {item.title}
              </Typography>
              <Typography
                fontSize={"12px"}
                textOverflow="ellipsis"
                overflow={"hidden"}
              >
                {item.subtitle}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Related;
