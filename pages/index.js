import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';
import SelectInput from '../components/inputs/Select';
import DatePicker from '../components/inputs/DatePicker';
import AutoCompleteInput from '../components/inputs/AutoComplete';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Fake My Flight</title>
        </Head>
        <main>
            <Grid
                container
                p={5}
                style={{borderStyle: 'dashed', borderColor: 'black'}}>
                <Grid
                    item
                    sm={12}>
                    <h1 className={styles.title}> Fake My Flight </h1>
                    <p className={styles.description}> Proof of Onward Travel is required by many countries before you even
                        board an ✈️ airplane. If you'd like to keep your travel options open & travel on one-way tickets,
                        this hack is perfect for you! Use this for pranks and anything you like, except for real flights.
                    </p>
                </Grid>
                <Grid
                    item
                    container
                    mt={10}
                    sm={12}>
                    <SelectInput
                        prefix="trip-type"
                        label="Trip Type"
                        values={[
                            'One way',
                            'Round Trip'
                        ]}
                    />
                </Grid>
                <Grid
                    item
                    mt={5}
                    sm={12}>
                    <SelectInput
                        width={300}
                        prefix="Travelers"
                        label="Travelers"
                        values={[ 1, 2, 3, 4, 5, 6 ]}
                    />
                </Grid>
                <Grid
                    item
                    mt={5}
                    sm={12}>
                    <AutoCompleteInput
                        label="Departing Airport"
                    />
                </Grid>
                <Grid
                    item
                    mt={5}
                    sm={12}>
                    <AutoCompleteInput
                        label="Arrival Airport"
                    />
                </Grid>
                <Grid
                    item
                    mt={5}
                    sm={12}>
                    <DatePicker
                        label="Depart Date"
                    />
                </Grid>
                <Grid
                    item
                    container
                    mt={5}
                    sm={12}>
                    <DatePicker
                        label="Return Date"
                    />
                </Grid>
                <Grid
                    item
                    mt={5}>
                    <Button
                        size="large"
                        variant="outlined">Submit</Button>
                </Grid>
            </Grid>
        </main>
      </div>
  );
}