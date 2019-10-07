import React from 'react';
import { Box, Button } from 'grommet';
import { FormPrevious, FormNext } from 'grommet-icons';

class Pager extends React.Component {
  render() {
    const { previous, next } = this.props;

    return (
      <Box as="nav">
        {previous && (
          <Button
            icon={<FormPrevious />}
            label={previous.frontmatter.title}
            href={previous.fields.slug}
          />
        )}
        {next && (
          <Button
            icon={<FormNext />}
            reverse="true"
            label={next.frontmatter.title}
            href={next.fields.slug}
          />
        )}
      </Box>
    );
  }
}

export default Pager;
