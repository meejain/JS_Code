
import Basicstats from '../model/basicstats';

type Props = {
bts:Basicstats
delEvent: (id:number) => void
}

export default function BasicstatsCard({bts, delEvent}:Props) {
return <div>
{bts.quarter} {bts.initiative1} {bts.value1} {bts.initiative2} {bts.value2} {bts.initiative3} {bts.value3}
<button onClick={() => delEvent(bts.id)}>Delete</button>
</div>
}