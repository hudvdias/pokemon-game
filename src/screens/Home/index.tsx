import { Card, CardContent, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { PageContainer } from "./styles";

export const HomeScreen: FunctionComponent = () => {
  return (
    <PageContainer>
      <Card>
        <CardContent>
          <Stack spacing="1rem">
            <Typography variant="h5" textAlign="center">
              ⚠️ Under Construction
            </Typography>
            <Typography>
              This page is under construction, please try access again in a few
              days to see updates.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </PageContainer>
  );
};
