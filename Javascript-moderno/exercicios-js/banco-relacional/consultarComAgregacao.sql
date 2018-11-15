select
    regiao as 'Região',
    sum(populacao) as Total
from estados
GROUP BY regiao
order by Total desc

select
    sum(populacao) as SomaTotal
from estados

select
    avg(populacao) as MediaTotal
from estados