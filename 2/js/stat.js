
window.renderStatistics = function (ctx, names, times) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(120,20,420,270);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(110,10,420,270);



    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 130, 30);
    ctx.fillText('Список результатов:', 130, 50);

    var columnMaxHeight = 150;
    var columnX = 130;
    var columnWidth = 40;
    var columnIndent = 90;

    var maxTime = times[0];
    for (var i = 1; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    var step = columnMaxHeight / maxTime;

    for (i = 0; i < times.length; i++) {
      var columnHeight = step * times[i];
      var columnY = ctx.canvas.clientHeight - columnHeight - 60;

      ctx.fillStyle = '#000000';
      ctx.fillText(times[i].toFixed(0), columnX + columnIndent * i, columnY - 15);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = ['rgb(0, 0, ', (Math.random() * 255).toFixed(0), ')'].join('');
      }

      ctx.fillRect(columnX + columnIndent * i, columnY, columnWidth, columnHeight);
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], columnX + columnIndent * i, columnY + columnHeight + 5);
    }
  };
