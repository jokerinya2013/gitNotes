<template>
    <div>
        <div class="row mt-5 align-items-center">
            <table class="table" style="height: 30rem;">
                <thead>
                    <tr>
                        <th scope="col" class="text-center baslik">{{ info[i].bas }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center bilgi">{{ info[i].bilgi }}</td>
                    </tr>
                </tbody>
            </table>
            <h5 class="float-right">{{ i + 1 }}/{{ info.length }}</h5>
        </div>

        <div class="mt-5 slayt_footer">
            <button
                type="button"
                class="btn btn-outline-secondary float-left"
                :class="{ disabled: son }"
                @click="nav('prev')"
            >
                Önceki
            </button>

            <button
                type="button"
                class="btn btn-outline-secondary float-right"
                :class="{ disabled: son }"
                @click="nav('next')"
            >
                Sonraki
            </button>
        </div>
    </div>
</template>

<script>
/* burada js de yer alacak olan bilgiler dönecek. */
import { info } from './data'
export default {
    name: 'Slayt',
    data() {
        return {
            info: info,
            i: 0,
            son: false,
        }
    },
    methods: {
        nav(side) {
            if (side === 'prev') {
                if (this.i === 0) {
                    this.i = 0
                } else {
                    this.i--
                }
            } else {
                if (this.i === this.info.length - 1) {
                    this.i = this.info.length - 1
                } else {
                    this.i++
                }
            }

            console.log(this.i)
        },
    },
    //son u düzenleyeceksin
}
</script>

<style scoped>
.baslik {
    font-size: 2rem;
}
.bilgi {
    font-size: 1.5rem;
}
.slayt_footer {
    border-top: 1px dotted #cccccc;
    padding-top: 1rem;
}
</style>
