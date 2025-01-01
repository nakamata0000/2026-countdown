// カウントダウンタイマーのセット
const countdownDate = new Date("2026-01-01T00:00:00").getTime();

// タイマーを更新する関数
const updateTimer = () => {
    // 現在の日時を取得
    const now = new Date().getTime();

    // 残り時間を計算
    const distance = countdownDate - now;

    // 日、時間、分、秒を計算
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 各要素に残り時間を表示
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // 終了時のメッセージを表示
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "カウントダウン終了！";
    }
};

// タイマーを1秒ごとに更新
const timerInterval = setInterval(updateTimer, 1000);

// 最初の表示を更新
updateTimer();