import React, { memo, useState } from "react";

import { Button, Padded, Text } from "@buffetjs/core";
import { Header } from "@buffetjs/custom";
import { LoadingBar } from "@buffetjs/styles";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext, request } from "strapi-helper-plugin";

import pluginId from "../../pluginId";

const HomePage = () => {
  const { formatMessage } = useGlobalContext();
  const [busy, setBusy] = useState(false);

  const triggerPublish = async () => {
    setBusy(true);
    setTimeout(() => setBusy(false), 50000);
    const { success } = await request(`/${pluginId}/publish`, {
      method: "GET",
    });
    if (success) setBusy(false);
  };

  const handleClick = () => {
    const ok = confirm(
      formatMessage({ id: `${pluginId}.home.prompt.confirm` })
    );
    if (ok) triggerPublish();
  };

  return (
    <Padded size="md" top left bottom right>
      <Header
        title={{ label: formatMessage({ id: `${pluginId}.home.title` }) }}
        content={formatMessage({ id: `${pluginId}.home.description` })}
      />
      {busy ? (
        <>
          <LoadingBar />
          <Text>{formatMessage({ id: `${pluginId}.home.busy` })}</Text>
        </>
      ) : (
        <>
          <Padded size="md" bottom>
            <Text>{formatMessage({ id: `${pluginId}.home.prompt` })}</Text>
          </Padded>
          <Button
            color="primary"
            icon={<FontAwesomeIcon icon={faUpload} />}
            onClick={handleClick}
          >
            {formatMessage({ id: `${pluginId}.home.button.publish` })}
          </Button>
        </>
      )}
    </Padded>
  );
};

export default memo(HomePage);
